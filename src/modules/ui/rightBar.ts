import { Level, listeners } from "../../logger";
import { patchHalves } from "../../patch";
import { extern_RightSidebar } from "../externs";
import { React } from "../react";

type Logs = [number, string, Level][];

const retained = 99;

let logs = [];
let setLogs: any;
listeners.add(function (message: string, level: Level) {
    logs = [...logs.slice(-retained), [Math.random(), message, level]];
    setLogs?.(logs);
});

extern_RightSidebar.then(exports => patchHalves(exports, "B", undefined, (_, __, res) => {
    patchHalves(res.type, "type", undefined, (_, __, res) => {
        return [[
            res.props.children[0],
            React.createElement(Logs),
        ]];
    });
}));

function Logs() {
    const [componentLines, componentSetLogs] = React.useState<Logs>(logs);

    React.useEffect(() => {
        setLogs = componentSetLogs;
        return () => setLogs = null;
    }, []);

    return React.createElement(
        "div", { className: "xp-logs" },
        componentLines.map(([key, message, level]) => React.createElement(
            "pre",
            {
                key,
                className: level == Level.Log
                    ? "xp-logs-log"
                    : level == Level.Warn
                        ? "xp-logs-warn"
                        : level == Level.Error
                            ? "xp-logs-error"
                            : "xp-logs-unknown"
            },
            message
        ))
    );
}
