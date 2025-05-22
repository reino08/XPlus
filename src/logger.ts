// The console gets very messy so using a filter is helpful
const decoration = ["%cX+", "padding: 0px 2px"];

export enum Level {
    Log,
    Warn,
    Error,
}

export const listeners: Set<(message: string, level: Level) => void> = new Set();

export default class Logger {
    static log = wrap(console.log, Level.Log);
    static warn = wrap(console.warn, Level.Warn);
    static error = wrap(console.error, Level.Error);

    static write(message: string, level: Level = Level.Log) {
        for (const listener of listeners)
            listener(message, level);
    }
}

function wrap(func: any, level: Level) {
    return (...args: any) => {
        func.call(func, ...decoration, ...args);
        Logger.write(
            args.map((arg: any) => typeof arg != "string" ? JSON.stringify(arg) : arg).join(" "),
            level
        );
    }
}
