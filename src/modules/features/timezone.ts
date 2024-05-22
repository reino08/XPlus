import Webpack from "../webpack.ts";

// Regions that use DST switch which UTC offset they use.
Webpack.getString("amountOfTime", x => x?.Z).then(exports => {
    let original = exports.Z.prototype.render;
    exports.Z.prototype.render = function () {
        let res = original.apply(this, arguments);

        res.props.children[1].props.onClick = () => {
            let result = prompt("Enter observed time in hours:");
            if (!result) return;

            let hours = parseInt(result);
            let utc = new Date(this.props.timestamp);
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

        return res;
    }
});
