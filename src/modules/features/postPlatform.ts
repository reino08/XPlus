import { React } from "../react.ts";
import { findInTree } from "../../utils.ts";
import { TweetUserPatch } from "../patches/tweetUser.ts";

TweetUserPatch.then(patch => patch.subscribe(patch.post, (self, _, res) => {
    let tweet = findInTree(self._reactInternals, (x: any) => x.stateNode?.props?.tweet);
    if (!tweet) return res;

    let platform = tweet.source_name
        .replace(/Twitter for/, "")
        .replace(/Twitter Web App/, "Web")
        .replace(/Twitter Web Client/, "Web Client")
        .replace(/TweetDeck Web App/, "TweetDeck")

    let props = res.props.children.props.children.props.children[1].props;
    props.children = React.Children.toArray(props.children);
    props.children.push(React.createElement("a", {
        style: {
            color: "#b8babd",
            marginLeft: "4px",
            fontFamily: "TwitterChirp",
            fontSize: "15px",
            lineHeight: "20px",
            verticalAlign: "middle",
            textDecoration: "none",
            minWidth: "content-fit",
            flex: "1",
        },
        href: tweet.source_url
    }, platform || "Unknown"));
}));
