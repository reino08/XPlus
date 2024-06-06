import { TweetUserPatch } from "../patches/tweetUser.ts";
import { React } from "../react.ts";

TweetUserPatch.then(patch => patch.subscribe(patch.post, (self, _, res) => {
    let followed = self.props.tweet.user.followed_by;
    let following = self.props.tweet.user.following;

    if (!followed && !following) return;

    let className = "xp-tweet-user-" +
        ((following && followed)
            ? "mutual"
            : following
                ? "following"
                : "followed")

    res.props.children = [
        React.createElement("span", { className }),
        ...React.Children.toArray(res.props.children)
    ];
}, -100));
