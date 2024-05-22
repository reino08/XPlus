// These imports are for side effects:
import "./style/index.css";
import "./ui/index.ts"
// This is the auto-load side-effects folder
// @ts-ignore Not much can be done about this lint
import "./modules/**/*.ts";

// These imports for for being exposed:
import Webpack from "./modules/webpack.ts";
import { filters } from "./ui/filters.tsx";

// Expose some data to make development easier
unsafeWindow["xp"] = {
    webpack: Webpack,
    get filters() { return filters },
};

setTimeout(() => {
    // Sometimes the page does not fully load, so refresh after an amount of time
    // This element is removed when the page successfully loads
    if (document.getElementById("placeholder"))
        location.reload();
}, 1_000);
