import { patchHalves } from "../../patch.ts";
import { extern_ContextMenu } from "../externs.ts";

extern_ContextMenu.then(exports => {
    // TODO: unfortunate code duplication.
    patchHalves(exports.default.WrappedComponent.type.WrappedComponent.type.render().props.wrappedComponent.WrappedComponent.prototype, "render", self => {
        patchHalves(self, "_getActionItems", undefined, (_, __, res: any[]) => {
            res[0].push({
                text: "View community notes",
                link: "/i/birdwatch/t/" + self.props.tweet.id_str
            });
        });
    });
});
