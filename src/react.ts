import Webpack from "./webpack.ts";

let React: any;
let ReactDOM: any;
let resolve: (value: any) => void;
let resolveDOM: (value: any) => void;
let ReactPromise: Promise<any> = new Promise(res => resolve = res);
let ReactDOMPromise: Promise<any> = new Promise(res => resolveDOM = res);
export function init() {
    Webpack.get(exports =>
        typeof exports == "object"
        && "createElement" in exports
        && "cloneElement" in exports)
        .then(exports => resolve(React = exports));
    Webpack.get(exports =>
        typeof exports == "object"
        && "createRoot" in exports)
        .then(exports => resolveDOM(ReactDOM = exports));
}

export { React, ReactDOM, ReactPromise, ReactDOMPromise }
