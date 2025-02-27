import Logger from "../../logger.ts";
import { findInTree } from "../../utils.ts";
import { TweetUserPatch, UserCardPatch } from "../patches.ts";
import { React } from "../react.ts";

TweetUserPatch.then(patch => patch.subscribe(patch.post, (self, _, res) => {
    let tweet = self.props.tweet;
    if (!tweet) return Logger.warn("Missing prop `tweet`", self);

    let user = tweet.retweeted_status?.user || tweet.user;
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
