import { patchHalves } from "../../patch.ts";
import { extern_Timestamp } from "../externs.ts";

// Regions that use DST switch which UTC offset they use.
extern_Timestamp.then(exports => {
    patchHalves(exports.Z.prototype, "render", undefined, (self, _, res) => {
        res.props.children[1].props.onClick = () => {
            let result = prompt("Enter observed time in hours:");
            if (!result) return;

            let hours = parseInt(result);
            let utc = new Date(self.props.timestamp);
            let seen = utc.getUTCHours();
            let offset = (hours - seen) % 24;
            if (offset < -12)
                offset += 24;
            if (offset > 14)
                offset -= 24;

            let timezone = offset == 0
                ? "UTC"
                : offset > 0
                    ? `UTC+${offset}`
                    : `UTC${offset}`;

            alert(timezone);
        }
    })
});
