import Webpack from "../webpack.ts";
import { React } from "../react.ts";
import { filters } from "../../ui/filters.tsx";
import { patchHalves } from "../../patch.ts";

Webpack.getString("freedom_of_speech_not_reach", exports => exports?.ZP).then(exports => {
    patchHalves(exports.ZP.prototype, "render", (self, _, res) => {
        if (!self.filterChecked) {
            self.filterChecked = true;
            self.filterReason = checkFilters(self.props.tweet);
        }

        if (self.filterReason)
            res.value = React.createElement("div", {
                style: {
                    color: "#b8babd",
                    marginLeft: "4px",
                    fontFamily: "TwitterChirp",
                    fontSize: "15px",
                    alignSelf: "center",
                },
                onClick: () => (delete self.filterReason, self.forceUpdate()),
            }, `Filtered: ${self.filterReason}`);
    });
});

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
