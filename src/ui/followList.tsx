import { React, Link } from "../modules/react.ts";
import { list, callbacks } from "../modules/features/followTracker.ts";

let once = true;
export default function FollowList() {
    // The list is updated in place so useState on it won't work
    const [, forceUpdate] = React.useReducer(x => x + 1, 0);
    if (once) {
        once = false;
        callbacks.push(forceUpdate);
    }

    return (<div id="xp-ui-follow-list">
        {list.map(x => Link("/" + x, e => {
            let props = e();
            delete props["style"]; // Breaks 
            delete props["hrefattrs"]; // [object Object]
            return <a {...props}>@{x}</a>
        }))}
    </div>);
}
