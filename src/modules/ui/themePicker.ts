import { extern_Theme } from "../externs.ts";
import { send, subscribe } from "./commands.ts";

// This entire module is buggy
let gate = false;
let current = undefined;
extern_Theme.then(exports => {
    // Keep our UI up to date with the rest of the page
    exports.Z.onThemeChange(theme => {
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
            exports.Z.setPrimaryColor(value as string);
        }, 1_000);
    });

    subscribe("theme_picker.data.get", () => send("tab.theme_picker.data.set", exports.Z.theme.colors));
    subscribe("theme_picker.current.set", (key) => {
        gate = true;
        exports.Z.setPrimaryColor(key);
        GM.setValue("xp-theme", key);
    });
});
