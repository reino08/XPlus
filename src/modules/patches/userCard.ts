import { Patch } from "../../patch.ts";
import { extern_UserCard } from "../externs.ts";

export const UserCardPatch: Promise<Patch> = extern_UserCard.then(exports => new Patch(exports.Z.prototype, "render"));
