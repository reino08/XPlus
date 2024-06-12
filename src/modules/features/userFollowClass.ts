import { findInTree } from "../../utils.ts";
import { TweetUserPatch } from "../patches/tweetUser.ts";
import { UserCardPatch } from "../patches/userCard.ts";
import { React } from "../react.ts";

TweetUserPatch.then(patch => patch.subscribe(patch.post, (self, _, res) => {
    let user = self.props.tweet.retweeted_status?.user || self.props.tweet.user;
    if (!user) return;

    let className = getClassName(user.following, user.followed_by);
    if (!className) return;

    res.props.children = [
        React.createElement("span", { className }),
        ...React.Children.toArray(res.props.children)
    ];
}, -100));

UserCardPatch.then(patch => patch.subscribe(patch.post, (self, _, res) => {
    let user = findInTree(self._reactInternals, (x: any) => x?.stateNode?.props?.hasOwnProperty("isFollowing") && x.stateNode.props || undefined, undefined, true);
    if (!user) return;

    let className = getClassName(user.isFollowing, user.isFollowedBy);
    if (!className) return;

    res.props.children.props.children.unshift(React.createElement("span", { className }),);
}, -100));

function getClassName(following: boolean, followed: boolean): string | undefined {
    if (!following && !followed) return;

    return "xp-user-" +
        ((following && followed)
            ? "mutual"
            : following
                ? "followed"
                : "follower");
}
