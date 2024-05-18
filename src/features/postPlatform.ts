import Webpack from "../webpack.ts";
import { React } from "../react.ts";
import { findInTree } from "../utils.ts";

export default function init() {
    Webpack.get(
        (_, exports) => exports?.Z?.toString?.()?.includes?.("_getUserScreenNameNode")
    ).then(exports => {
        let original = exports.Z.prototype.render;
        exports.Z.prototype.render = function () {
            let res = original.apply(this, arguments);

            let tweet = findInTree(this._reactInternals, "tweet", (x: any) => x.stateNode?.props?.tweet);
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

            return res;
        }
    });
}