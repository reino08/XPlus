import { React } from "../react.ts";
import { filters } from "../ui/filters.ts";
import { TweetPatch } from "../patches.ts";

TweetPatch.then(patch => patch.subscribe(patch.pre, (self, _, res) => {
    if (!self.filterChecked) {
        self.filterChecked = true;
        self.filterReason = checkFilters(self.props.tweet);
    }

    if (!self.filterReason) return;

    res.value = React.createElement("div", {
        className: "xp-filtered",
        onClick: () => (delete self.filterReason, self.forceUpdate()),
    }, `Filtered: ${self.filterReason}`);
}))

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
