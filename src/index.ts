// These imports are for side-effects:
import "./style/index.css";
// This is the auto-load side-effects folder
// @ts-ignore Not much can be done about this lint
import "./modules/**/*.*";

// Allows external scripts to access internal data.
// Addons interact with this through their core.ts file
import "./addons.ts";
import Logger, { Level } from "./logger.ts";
export type { XP } from "./addons.ts";

setTimeout(() => {
    // Sometimes the page does not fully load, so refresh after an amount of time
    // This element is removed when the page successfully loads
    if (document.getElementById("placeholder"))
        location.reload();
}, 5_000);

Logger.log("Loaded X+ core");
