import Webpack from "../webpack.ts";
import { Patch } from "../../patch.ts";

export const TweetPatch: Promise<Patch> = Webpack.getString(
    "freedom_of_speech_not_reach",
    exports => exports?.ZP
).then(exports => new Patch(exports.ZP.prototype, "render"));
