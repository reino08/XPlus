import { patchHalves } from "../../patch.ts";
import { extern_WindowHeader, extern_DMMessages, extern_DMPage } from "../externs.ts";
import { React } from "../react.ts";
import { type Dispatch, type Context } from "react";

type Setter = Dispatch<React.SetStateAction<string>>
let context: Context<{ viewer: string | undefined, setViewer: Setter }>;

extern_DMPage.then(exports => patchHalves(exports, "Z", undefined, (_, __, res) => {
    if (!context)
        context = React.createContext(undefined);

    let [viewer, setViewer] = React.useState<string | undefined>(undefined);
    return [React.createElement(context.Provider, { value: { viewer, setViewer } }, res)];
}));

extern_WindowHeader.then(exports => patchHalves(exports.ZP.prototype, "_renderContent", undefined, (_, __, res) => {
    let right = res?.props?.children?.[0]?.props?.rightControl?.props?.children;
    if (!right) return;

    let id: string | undefined;
    for (let child of right) {
        if (id = child?.props?.conversationId) break;
    }
    if (!id || id.indexOf("-") != -1) return;

    right.unshift(
        React.createElement(context.Consumer, {
            children: ({ setViewer }) =>
                React.createElement("button", {
                    onClick: () => {
                        let val = prompt("Enter numerial user ID (empty to clear):")
                        if (val === null) return;
                        if (val.length == 0) val = undefined;
                        // TODO: some validation, try to resolve username to ID
                        setViewer(val);
                    },
                }, "View As"),
        })
    );
}));

extern_DMMessages.then(exports => {
    patchHalves(exports.Z.type, "render", undefined, (_, __, res) => {
        patchHalves(res.props.wrappedComponent, "type", undefined, (_, __, res) => {
            return [React.createElement(SetPerspective, { res })];
        });
    });
});

function SetPerspective({ res }) {
    const { viewer } = React.useContext(context);
    if (viewer === undefined) return res;

    return React.cloneElement(res, {
        children: React.cloneElement(res.props.children, {
            perspective: viewer,
            key: viewer,
        }),
    });
}
