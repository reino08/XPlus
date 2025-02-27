import { Patch } from "../patch.ts";
import { findInTree } from "../utils.ts";
import { extern_QuotedPost, extern_Sidebar, extern_Tweet, extern_TweetUser, extern_UserCard } from "./externs.ts";

export const TweetPatch = wrap(extern_Tweet, x => x.ZP.render({}).props.children.type.prototype, "render");
export const TweetUserPatch = wrap(extern_TweetUser, x => x.Z.prototype, "render");
export const UserCardPatch = wrap(extern_UserCard, x => x.Z.prototype, "render");
export const SidebarPatch = wrap(extern_Sidebar, x => x, "ZP");
export const QuotedPostPatch = wrap(extern_QuotedPost, x => x, "Z");

async function wrap(extern: Promise<any>, getter: (exports: any) => any, key: string): Promise<Patch> {
    return new Patch(getter(await extern), key);
}

TweetUserPatch.then(patch => patch.subscribe(patch.post, self => {
    self.props.tweet = findInTree(self._reactInternals, (x: any) => x.stateNode?.props?.tweet);
}, Infinity));
