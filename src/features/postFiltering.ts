import Webpack from "../webpack.ts";
import { React } from "../react.ts";
import { filters } from "../ui/menu.tsx";

export default function init() {
    Webpack.getString("freedom_of_speech_not_reach", exports => exports?.ZP).then(exports => {
        let original = exports.ZP.prototype.render;
        exports.ZP.prototype.render = function () {
            if (!this.filterChecked) {
                this.filterChecked = true;
                this.filterReason = checkFilters(this.props.tweet);
            }

            if (this.filterReason)
                return React.createElement("div", {
                    style: {
                        color: "#b8babd",
                        marginLeft: "4px",
                        fontFamily: "TwitterChirp",
                        fontSize: "15px",
                        alignSelf: "center",
                    },
                    onClick: () => (delete this.filterReason, this.forceUpdate()),
                }, `Filtered: ${this.filterReason}`);

            return original.apply(this, arguments);
        }
    });
}

function checkFilters(tweet: any) {
    if (tweet.user.following || tweet.user.followed_by)
        return;

    for (let [type, regex, desc] of filters) {
        if ((type == "n" || type == "") && tweet.user.name.search(regex) != -1)
            return `Name (${desc || "Unspecified"})`;

        if ((type == "b" || type == "") && tweet.user.description.search(regex) != -1)
            return `Bio (${desc || "Unspecified"})`;
    }

    return null;
}
