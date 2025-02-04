import * as externs from "../externs.ts";
import { send, subscribe } from "./commands.ts";

enum State {
    Loading = 0,
    Succeeded = 1,
    Failed = 2,
}

const states: { [name: string]: number } = {}

for (const [name, promise] of Object.entries(externs).map<[string, Promise<any>]>(([name, promise]) => [name.substring(7), promise])) {
    states[name] = State.Loading;
    promise.then(() => states[name] = State.Succeeded, () => states[name] = State.Failed);
}

subscribe("debug.externs.get", () => send("debug.externs.set", states));
