// These imports are for side-effects:
import "./style/index.css";
// This is the auto-load side-effects folder
// @ts-ignore Not much can be done about this lint
import "./modules/**/*.*";

// These imports for for being exposed:
import * as symbols from "./symbols.ts";
import Webpack from "./modules/webpack.ts";
import { React, ReactDOM } from "./modules/react.ts";

// Expose some data to make development easier
Object.defineProperty(unsafeWindow, Symbol.for("X+"), {
    configurable: false,
    enumerable: false,
    writable: false,
    value: {
        symbols,
        webpack: Webpack,
        get React() { return React },
        get ReactDOM() { return ReactDOM },
    },
});

setTimeout(() => {
    // Sometimes the page does not fully load, so refresh after an amount of time
    // This element is removed when the page successfully loads
    if (document.getElementById("placeholder"))
        location.reload();
}, 1_000);
