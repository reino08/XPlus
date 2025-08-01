import { patchHalves } from "../../patch";
import { RunApplicationPatch } from "../patches";
import { settings } from "../../settings.ts";

let instance = undefined;

RunApplicationPatch.then(patch => patch.subscribe(patch.pre, (_self, [_appKey, appParameters]) => {
    const obj = appParameters
        .initialProps.routerProps
        .children
        .props.children
        .props.children[1]
        .props.children[3]
        .props.children
        .type.WrappedComponent.type.render()
        .props.wrappedComponent.type.render()
        .props.wrappedComponent;

    patchHalves(obj.prototype, "render", undefined, (self, __, res) => {
        patchHalves(res.props.children.props.children[4].type.WrappedComponent.type.WrappedComponent.prototype, "render", undefined, (_, __, res) => {
            instance = self;

            patchHalves(res.props, "children", undefined, (_, __, res) => {
                const elements = res.props.children;
                if (settings.hidden_dms)
                    elements[2] = null;
                if (settings.hidden_grok)
                    elements[6] = null;
            });
        });
    });

    settings.subscribe("hidden_dms", reload);
    settings.subscribe("hidden_grok", reload);
}));

function reload() {
    console.log(instance);
    instance?.forceUpdate();
}
