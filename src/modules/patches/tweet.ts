import Webpack from "../webpack.ts";
import { Patch } from "../../patch.ts";
import { extern_Tweet } from "../externs.ts";

export const TweetPatch: Promise<Patch> = extern_Tweet.then(exports => new Patch(exports.ZP.prototype, "render"));
