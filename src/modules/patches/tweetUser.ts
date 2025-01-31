import { Patch } from "../../patch.ts";
import { findInTree } from "../../utils.ts";
import { extern_TweetUser } from "../externs.ts";

export const TweetUserPatch: Promise<Patch> = extern_TweetUser.then(exports => new Patch(exports.Z.prototype, "render"));

TweetUserPatch.then(patch => patch.subscribe(patch.post, self => {
    self.props.tweet = findInTree(self._reactInternals, (x: any) => x.stateNode?.props?.tweet);
}, Infinity));
