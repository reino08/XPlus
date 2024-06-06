import { TweetUserPatch } from "../patches/tweetUser.ts";
import { React } from "../react.ts";

TweetUserPatch.then(patch => patch.subscribe(patch.post, (self, _, res) => {
    let user = self.props.tweet.retweeted_status?.user || self.props.tweet.user;
    let followed = user.followed_by;
    let following = user.following;

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
