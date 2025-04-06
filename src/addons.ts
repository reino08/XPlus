// These imports for for being exposed:
import * as symbols from "./symbols.ts";
import * as externs from "./modules/externs.ts";
import * as patches from "./modules/patches.ts";
import Logger from "./logger.ts";
import Webpack from "./modules/webpack.ts";
import * as patch from "./patch.ts";
import { React, ReactDOM } from "./modules/react.ts";

export type XP = typeof data;
const data = {
    symbols,
    externs,
    patches,
    Logger, // TODO: return a specialized instance for each addon
    Webpack,
    Patch: patch,
    get React() { return React },
    get ReactDOM() { return ReactDOM },
};

Object.defineProperty(unsafeWindow, Symbol.for("X+"), {
    configurable: false,
    enumerable: false,
    writable: false,
    value: data,
});

load0(data);

// Versioned loaders for if the interface ever needs to change
export function load0(data: XP) {
    const symbol = Symbol.for("X+ Addons 0");
    let existing = unsafeWindow[symbol];
    if (existing)
        for (const callback of existing)
            callback(data);
    else existing = (unsafeWindow[symbol] = []);

    const original = existing.push;
    existing.push = function (callback: (xp: XP) => void) {
        callback(data);
        return original.apply(this, arguments);
    }
}
