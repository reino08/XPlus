import Webpack from "../webpack.ts";
import { send, subscribe } from "./commands.ts";

let gate = false;
let current = undefined;
Webpack.getProps(x => x?.default, "theme").then(exports => {
    // Keep our UI up to date with the rest of the page
    exports.default.onThemeChange(theme => {
        if (!gate) return;
        gate = false;

        send("theme.set", current = theme.colors[theme.primaryColorName]);
    });

    subscribe("theme.get", () => send("theme.set", current));

    GM.getValue("xp-theme").then(value => {
        // There is a race condition here.
        // Either the page loads fast enough or the theme is never set.
        // There is no immediately obvious solution, 
        //   so it will not be implemented until there is a problem.
        setTimeout(() => {
            gate = true;
            exports.default.setPrimaryColor(value as string);
        }, 1_000);
    });

    subscribe("theme_picker.data.get", () => send("tab.theme_picker.data.set", exports.default.theme.colors));
    subscribe("theme_picker.current.set", (key) => {
        gate = true;
        exports.default.setPrimaryColor(key);
        GM.setValue("xp-theme", key);
    });
});
