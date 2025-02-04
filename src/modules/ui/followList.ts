import { callbacks, list } from "../features/followTracker.ts";
import { React, ReactDOM } from "../react.ts";
import { makeLink } from "../../utils.ts";
import { send, subscribe } from "./commands.ts";

callbacks.push(() => {
    send("follow_list.set", list);
})

subscribe("follow_list.get", () => {
    send("follow_list.set", list);
});

subscribe("follow_list.open", (user) => {
    let element = document.createElement("div");
    ReactDOM.createRoot(element).render(React.createElement(Redirect, { user, element }));
});

function Redirect({ user, element }) {
    React.useEffect(() => {
        element.children[0].click();
    });

    return makeLink({}, "", "/" + user);
}
