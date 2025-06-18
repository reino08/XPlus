import { settings } from "../../settings";
import { send, subscribe } from "./commands";

subscribe("set", (prop, value) => {
    settings[prop] = value;
});

subscribe("get", (prop) => {
    send("set", prop, settings[prop]);
});

