// These imports for for being exposed:
import * as symbols from "./symbols.ts";
import * as externs from "./modules/externs.ts";
import * as patches from "./modules/patches.ts";
import Logger from "./logger.ts";
import Webpack from "./modules/webpack.ts";
import * as patch from "./patch.ts";
import { React, ReactDOM } from "./modules/react.ts";
import { API } from "./modules/api.ts";

export type XP = typeof data;
const data = {
    symbols,
    externs,
    patches,
    Logger, // TODO: return a specialized instance for each addon
    Webpack,
    Patch: patch,
    get APIClient() { return API },
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
load1(data);

// Versioned loaders for if the interface ever needs to change
export function load0(xp: XP) {
    read(
        Symbol.for("X+ Addons 0"),
        invoke.bind(undefined, xp)
    );
}

export function load1(xp: XP) {
    read(
        Symbol.for("X+ Addons 1"),
        ([callbacks, name]) => invoke(xp, callbacks, name)
    );
}

function read(symbol: symbol, handle: any) {
    let existing = unsafeWindow[symbol];
    if (existing)
        for (const data of existing)
            handle(data);
    else existing = (unsafeWindow[symbol] = []);

    const original = existing.push;
    existing.push = function (data: any) {
        handle(data)
        return original.apply(this, arguments);
    }
}

function invoke(xp: XP, callback: (xp: XP) => void, name: string = undefined) {
    let display = name == undefined
        ? "unnamed addon"
        : "addon " + name;

    try {
        callback(xp);
    } catch (err) {
        Logger.error("Failed to load " + display);
    }

    Logger.log("Loaded " + display);
}
