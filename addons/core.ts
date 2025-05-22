// For reuse in all external scripts. As minimal as possible.

import type { XP as _XP } from "../src/index.ts";
export type XP = _XP;

/**
 * @deprecated Register a named addon instead
 */
export function registerAddon(callback: (xp: XP) => void) {
    (unsafeWindow[Symbol.for("X+ Addons 0")] ||= []).push(callback);
}

export function registerNamedAddon(name: string, callback: (xp: XP) => void) {
    (unsafeWindow[Symbol.for("X+ Addons 1")] ||= []).push([callback, name]);
}
