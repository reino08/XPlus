import { patchHalves } from "../../patch";
import { replaceInTree } from "../../utils";
import { extern_ReplyEditor, extern_APIPostActions, extern_APIFetchPost, extern_Timestamp } from "../externs";
import { React } from "../react";
import Logger from "../../logger";
import { API } from "../api";

enum State {
    Default = 0,
    Spam = 1,
    ReplyAll = 2,
    __LAST,
}

let state: State = State.Default;
let onStateChanged: Set<(state: State) => void> = new Set();

extern_ReplyEditor.then(exports => {
    patchHalves(exports.Z.prototype, "render", undefined, (self, __, res) => {
        let target = res?.props?.children?.props?.children?.props;
        if (!Array.isArray(target?.children) || !target.children[0]) return;

        target.children = React.createElement(Container, { children: target.children });
    });
});

function Container({ children: [left, post] }) {
    const [_state, setState] = React.useState(state);
    React.useEffect(() => {
        const listener = state => setState(state);
        onStateChanged.add(listener);
        return () => void onStateChanged.delete(listener);
    }, []);

    if (_state != State.Default)
        post = replaceInTree(post, [2, 1], (target: React.ReactElement) =>
            React.cloneElement(target, {
                children: (() => {
                    if (_state == State.Spam) return "Spam";
                    else if (_state == State.ReplyAll) return "Reply All";
                })()
            })
        );

    let options = React.createElement("button", {
        onClick: () => {
            state += 1;
            state %= State.__LAST;
            for (const listener of [...onStateChanged])
                listener(state);
        },
        className: "xp-reply-more"
    }, "+");

    return [left, post, options];
}

let bypass = Symbol();

extern_APIPostActions.then(exports => patchHalves(exports, "ZP", undefined, (_, __, res) => {
    let count: number;
    patchHalves(res, "sendTweet", (_, [post, val], res) => {
        if (val == bypass) return;

        if (state == State.Spam) {
            count = parseInt(prompt("Amount of times to send the post?"));
            if (Number.isNaN(count))
                return res.value = null; // cancel
        } else if (state == State.ReplyAll) {
            res.value = replyAll(post);
        }
    }, (_, [post, val], res) => {
        if (val == bypass || state != State.Spam) return;

        return [spam(count, post, res)];
    });
}));

async function spam(count: number, post: any, original: Promise<any>) {
    const actions = (await extern_APIPostActions).ZP(API);

    const progress = index => Math.round(index / count * 100).toString().padStart(3, ' ');
    const res = await original;
    Logger.log(`[${progress(1)}%] Sent post 1`);

    for (let index = 2; index <= count; index++) {
        post.status = makeUnique(post.status);
        await actions.sendTweet(post, bypass);

        Logger.log(`[${progress(index)}%] Sent post ${index}`);
    }

    return res;
}

// TODO: make this better
function makeUnique(status: string): string {
    return status + ".";
}

async function replyAll(post: any) {
    const fetch_post = (await extern_APIFetchPost).Z(API);
    const post_actions = (await extern_APIPostActions).ZP(API);

    const thread = post.in_reply_to_status_id;
    let cursor: string | undefined;
    let total = 0;
    for (; ;) {
        const response = await fetch_post.fetchTweetDetail({ focalTweetId: thread, cursor });
        const entries = response.instructions.find(x => x.type == "TimelineAddEntries").entries;

        console.log(entries);
        const replies = entries
            .filter(x => x.entryId.startsWith("conversationthread"))
            .flatMap(x => x.content.items)
            .map(x => x.item.itemContent)
            .filter(x => x.itemType == "TimelineTweet")
            .map(x => x.tweet_results.result.rest_id)
            .filter(x => x);
        if (!replies.length)
            return Logger.log(`Finished after ${total} replies`);

        Logger.log(`Found ${replies.length}${total ? " more" : ""} replies`);
        total += replies.length;

        for (const [reply, index] of replies.map((item, index) => [item, index])) {
            post.in_reply_to_status_id = reply;
            try {
                await post_actions.sendTweet(post, bypass);
            } catch (err) {
                Logger.error("Failed sending post:", err);
                return;
            }

            const absIndex = index + 1 + total - replies.length;
            Logger.log(`Sent post ${absIndex}/${total}`);
        }

        cursor = entries.find(x => x.entryId.startsWith("cursor-bottom"))?.content?.value;
        if (!cursor) return Logger.warn("No cursor object");
    }
}
