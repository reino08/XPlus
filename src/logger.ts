// The console gets very messy so using a filter is helpful
const decoration = ["%cX+", "padding: 0px 2px"];

export default class Logger {
    static log = console.log.bind(window, ...decoration);
    static warn = console.warn.bind(window, ...decoration);
    static error = console.error.bind(window, ...decoration);
}
