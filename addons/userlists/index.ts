import "./style.css";
import { filter1_url, filter2_url } from "./config.json";
import { registerAddon } from "../core.ts";

import BloomFilter from "./bloomfilter.ts";

const [filter1, filter2] = [filter1_url, filter2_url].map((url) =>
    GM.xmlHttpRequest({
        url,
        responseType: "arraybuffer",
    }).then((resp: { response: ArrayBuffer }) => [
        new BloomFilter(new Int32Array(resp.response.slice(0, 287552)), 20),
        new BloomFilter(new Int32Array(resp.response.slice(287552)), 21),
    ])
);

registerAddon(async (xp) => {
    const [Filter1a, Filter1b] = await filter1;
    const [Filter2a, Filter2b] = await filter2;

    function into(tweet: any): [any, any] | undefined {
        if (!tweet?.user) return [null, null];

        const query = "twitter.com/" + tweet.user.screen_name.toLowerCase();
        return [
            (Filter1a.test(query) || Filter1b.test(query + "|1")) ? xp.React.createElement("span", { className: "xp-userlists-filter1", }) : null,
            (Filter2a.test(query) || Filter2b.test(query + "|1")) ? xp.React.createElement("span", { className: "xp-userlists-filter2" }) : null,
        ];
    }

    xp.patches.QuotedPostPatch.then(patch => patch.subscribe(patch.post, (_, [props], res) => {
        return [[
            ...into(props.tweet),
            ...xp.React.Children.toArray(res),
        ] as any];
    }, -50));

    xp.patches.TweetUserPatch.then((patch) =>
        patch.subscribe(patch.post, (self, _, res) => {
            res.props.children = [
                ...into(self.props.tweet),
                ...xp.React.Children.toArray(res.props.children),
            ];
        }, -200)
    );
});
