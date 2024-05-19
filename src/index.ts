import "./style/index.css";
import Logger from "./logger.ts";
import Webpack from "./webpack.ts";
import * as React from "./react.ts";
import * as UI from "./ui/index.ts"

// @ts-ignore Not much can be done about this lint
import * as Features from "./features/*";
import { filters } from "./ui/menu.tsx";

Logger.log("Initialized");

Webpack.init();
React.init();

UI.init();
for (let feature of Object.values(Features))
    (feature as () => void)();

// Expose some data to make development easier
unsafeWindow["xp"] = {
    get loader() { return Webpack.loader },
    get filters() { return filters },
};

setTimeout(() => {
    // Sometimes the page does not fully load, so refresh after an amount of time
    // This element is removed when the page successfully loads
    if (document.getElementById("placeholder"))
        location.reload();
}, 1_000);
