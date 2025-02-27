// For reuse in all external scripts. As minimal as possible.

import type { XP as _XP } from "../src/index.ts";
export type XP = _XP;

export function registerAddon(callback: (xp: XP) => void) {
    (unsafeWindow[Symbol.for("X+ Addons 0")] ||= []).push(callback);
}
