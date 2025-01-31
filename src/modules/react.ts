import * as ReactTypes from "react";
import * as ReactDOMTypes from "react-dom/client";
import { extern_Link, extern_React, extern_ReactDOM } from "./externs.ts";

export let React: typeof ReactTypes;
export let ReactDOM: typeof ReactDOMTypes;
export let Link: (arg0: any, arg1: any) => any;
export let Wait: Promise<any>;

Wait = Promise.all([
    extern_React.then(exports => React = exports),
    extern_ReactDOM.then(exports => ReactDOM = exports),
    extern_Link.then(exports => Link = exports.e),
])
