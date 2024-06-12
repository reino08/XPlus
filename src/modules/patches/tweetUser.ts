import Webpack from "../webpack.ts";
import { Patch } from "../../patch.ts";
import { findInTree } from "../../utils.ts";

export const TweetUserPatch: Promise<Patch> = Webpack.getString(
    "_getUserScreenNameNode",
    exports => exports?.Z
).then(exports => new Patch(exports.Z.prototype, "render"));

TweetUserPatch.then(patch => patch.subscribe(patch.post, self => {
    self.props.tweet = findInTree(self._reactInternals, (x: any) => x.stateNode?.props?.tweet);
}, Infinity));
