import "./style.css";
import { registerNamedAddon } from "../core.ts";

registerNamedAddon("April First Warning", async (xp) => {
    xp.patches.TweetUserPatch.then((patch) =>
        patch.subscribe(
            patch.post,
            (self, _, res) => {
                let timestamp =
                    self.props.tweet?.retweeted_status?.created_at ||
                    self.props.tweet?.created_at;
                let string = new Date(timestamp).toUTCString();
                let early = new Date(string + "+1400");
                let middle = new Date(string);
                let late = new Date(string + "-1200");

                let tag =
                    (early.getMonth() == 3 && early.getDate() == 1) ||
                        (middle.getMonth() == 3 && middle.getDate() == 1) ||
                        (late.getMonth() == 3 && late.getDate() == 1)
                        ? xp.React.createElement("span", {
                            className:
                                "xp-tag xp-april-first" + (!self.props.id ? "-quote" : ""),
                        })
                        : null;

                res.props.children = [
                    tag,
                    ...xp.React.Children.toArray(res.props.children),
                ];
            },
            -210
        )
    );
});
