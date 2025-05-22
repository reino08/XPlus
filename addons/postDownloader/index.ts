import { registerNamedAddon, type XP } from "../core";

import "./save";
import extract from "./extractor";

let cancelled: boolean = false;

registerNamedAddon("Post Downloader", xp => {
    registerStart();
    function registerStart() {
        GM_registerMenuCommand("Start downloading", () => {
            const id = prompt("Enter numerical user ID:");
            if (!id) return;

            GM_unregisterMenuCommand("Start downloading");
            registerStop();

            cancelled = false;
            downloadLoop(xp, id);
        });
    };

    function registerStop() {
        GM_registerMenuCommand("Stop downloading", () => {
            GM_unregisterMenuCommand("Stop downloading");
            registerStart();

            cancelled = true;
        });
    }

    async function downloadLoop(xp: XP, userId: string) {
        const fetcher = (await xp.externs.extern_APIFetchPosts).Z(xp.APIClient);

        let cursor = undefined;
        let zeroCount = 0;

        while (!cancelled) {
            try {
                const data = await fetcher.fetchUserTweetsAndReplies({ userId, cursor });
                const entries = data.instructions
                    .filter(x => x.type == "TimelineAddEntries")
                    .flatMap(x => x.entries);

                cursor = entries.find(x => x.entryId.startsWith("cursor-bottom-")).content.value;

                const posts = entries
                    .filter(x => x.entryId.startsWith("profile-conversation"))
                    .flatMap(x => x.content.items)
                    .map(x => x.item.itemContent?.tweet_results.result)
                    .map(x => x.__typename == "TweetWithVisibilityResults" ? x.tweet : x)
                    .filter(x => x.legacy.user_id_str == userId);

                GM_setValue(`results_${userId}_${crypto.randomUUID()}`, posts.map(extract))

                if (posts.length == 0) {
                    if (++zeroCount == 5) {
                        xp.Logger.write("Finished downloading.");
                        registerStop();
                    } else xp.Logger.write("Received no posts, increasing delay");
                } else {
                    xp.Logger.write(`Saved ${posts.length} posts`);
                    zeroCount = 0
                }
            } catch (err) {
                console.warn("Waiting due to error:", err);
                await delay(30_000);
            }

            if (!cancelled)
                await delay(5_000 * (zeroCount + 1));
        }
    }
});

function delay(ms: number) {
    return new Promise(res => setTimeout(res, ms));
}
