import Logger from "./logger.ts";
import { Link, React } from "./modules/react.ts";

export function findInTree(current: any, prop: string, accessor: (x: any) => any, depth?: number, suppress?: boolean): any | undefined {
    // Walks up the react tree as long as there are elements and
    //   uses a passed function to check each element for a property.
    // The property is stored to the `value` variable each step
    //   because we can reuse the result of the accessor when we
    //   reach the level containing our value.
    // The depth is used to filter out some of the unwanted
    //   results from the `userInfo` feature

    let value: any;
    for (let i = 0; i < (depth || Infinity) && current?.return && !(value = accessor(current)); i++)
        current = current.return;
    if (!value)
        return void (suppress || Logger.warn(`Failed to find \`${prop}\` in tree`));
    else return value;
}

export function makeLink(inProps: any, text: string, href: string) {
    return Link(href, e => {
        let props = e(inProps);
        props.style = { ...props.style[1], ...props.style[0] };
        return React.createElement("a", props, text);
    });
}
