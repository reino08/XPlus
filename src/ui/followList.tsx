import { React } from "../modules/react.ts";
import { list, callbacks } from "../modules/features/followTracker.ts";
import { makeLink } from "../utils.ts";

let once = true;
export default function FollowList() {
    // The list is updated in place so useState on it won't work
    const [, forceUpdate] = React.useReducer(x => x + 1, 0);
    if (once) {
        once = false;
        callbacks.push(forceUpdate);
    }

    return (<div id="xp-ui-follow-list">
        {list.map(x => makeLink({}, "@" + x, "/" + x))}
    </div>);
}
