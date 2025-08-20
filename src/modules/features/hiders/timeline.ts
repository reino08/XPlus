import { patchHalves } from "../../../patch";
import { extern_Timeline } from "../../externs";

extern_Timeline.then(exports => patchHalves(exports.default.render().type.prototype, "render", self => {
    // Remove the account setup prompt
    for (let i = 0; i < self.props.items.length; i++) {
        if (self.props.items[i].content?.header?.text == "Let\u2019s get you set up") {
            self.props.items.splice(i, 4);
            break;
        }
    }

    self.props.items = self.props.items.filter(entry => !entry.entryId?.includes("who-to-follow"));
}));
