import { patchHalves } from "../../patch.ts";
import { settings } from "../../settings.ts";
import { SidebarPatch } from "../patches.ts";
import { React } from "../react.ts";
import { send, subscribe } from "./commands.ts";

let hidden: string[] = [];

function notify() {
    send("hidden_tabs.set", hidden.join("\n"));
}

function apply(value: string | string[]) {
    if (Array.isArray(value))
        return void (hidden = value);

    hidden = value.split("\n").map(x => x.trim()).filter(x => x);
}

apply(settings.hidden_tabs)

subscribe("hidden_tabs.get", notify);
subscribe("hidden_tabs.set", value => {
    apply(value);
    settings.hidden_tabs = hidden;
});

SidebarPatch.then(patch => patch.subscribe(patch.post, (_, __, res) => {
    const props = res.props.children.props;
    const children = props.children.map(child => React.createElement(Hideable, { child }, null));
    props.children = children;
}, -10_000));

function Hideable({ child }) {
    let [_, update] = React.useReducer(x => x + 1, 0);

    patchHalves(child.props, "onClick", (_: any, [e], res) => {
        if (e.ctrlKey && e.altKey) {
            e.preventDefault();
            res.value = null; // prevents the original onClick from being called

            if (child.props["aria-label"] == "Open X+ Menu") return;

            hidden.push(child.props.label);
            settings.hidden_tabs = hidden;
            notify();
            update();
        }
    });

    return hidden.includes(child.props.label) ? null : child;
}
