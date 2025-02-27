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

    xp.patches.TweetUserPatch.then((patch) =>
        patch.subscribe(patch.post, (self, _, res) => {
            let tweet = self.props.tweet;
            if (!tweet) return xp.Logger.warn("Missing prop `tweet`", self);

            let user = tweet.retweeted_status?.user || tweet.user;
            if (!user) return;

            const query = "twitter.com/" + user.screen_name.toLowerCase();
            const hit1 = Filter1a.test(query) || Filter1b.test(query + "|1");
            const hit2 = Filter2a.test(query) || Filter2b.test(query + "|1");

            if (!hit1 && !hit2) return;

            res.props.children = [
                hit1 ? xp.React.createElement("span", { className: "xp-userlists-filter1", }) : null,
                hit2 ? xp.React.createElement("span", { className: "xp-userlists-filter2" }) : null,
                ...xp.React.Children.toArray(res.props.children),
            ];
        }, -200)
    );
});
