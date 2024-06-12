import Webpack from "../webpack.ts";
import { Patch } from "../../patch.ts";

export const UserCardPatch: Promise<Patch> = Webpack.getString(
    "_useUserHoverCardWrapper",
    x => x?.Z?.prototype?.render
).then(exports => new Patch(exports.Z.prototype, "render"));
