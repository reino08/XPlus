import { Patch } from "../../patch.ts";
import { extern_Tweet } from "../externs.ts";

export const TweetPatch: Promise<Patch> = extern_Tweet.then(exports => new Patch(exports.ZP.render({}).props.children.type.prototype, "render"));
