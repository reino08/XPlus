import { Level, listeners } from "../../logger";
import { patchHalves } from "../../patch";
import { extern_RightSidebar } from "../externs";
import { React } from "../react";

let pastLogs = [];
const fallbackCallback = (message: string, level: Level) => pastLogs.push([Math.random(), message, level]);
listeners.add(fallbackCallback);

type Logs = [number, string, Level][];

extern_RightSidebar.then(exports => patchHalves(exports, "B", undefined, (_, __, res) => {
    patchHalves(res.type, "type", undefined, (_, __, res) => {
        return [[
            res.props.children[0],
            React.createElement(Logs),
        ]];
    });
}));

function Logs() {
    const [logs, setLogs] = React.useState<Logs>(() => {
        listeners.delete(fallbackCallback);
        return pastLogs;
    });

    React.useEffect(() => {
        const callback = (message: string, level: Level) => {
            const val = [[Math.random(), message, level]].concat(logs) as Logs;
            setLogs(val.slice(0, Math.min(0, val.length - 100)));
        };

        listeners.add(callback);
        return () => void listeners.delete(callback);
    }, [logs]);

    return React.createElement(
        "div", { className: "xp-logs" },
        logs.map(([key, message, level]) => React.createElement(
            "div",
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
