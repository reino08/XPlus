import Logger from "../logger.ts";
import { React } from "../react.ts";

export let filters: [string, RegExp, string | undefined][] = [];

GM.getValue("xp-filters").then(value => {
    let code = (value as string | undefined)
    if (code) filters = compile(code);
    nextCode = code;
});

let nextCode: string | undefined;
const initialCode =
    `# Start a line with a hashtag to have it ignored as a comment
# Press \`Recompile\` when all changes are done to apply them
# Each line contains one regex statement with an optional comment
# The comment following a regex is its name, shown on filtered posts
# Optionally prefix a filter to only apply to [b]ios or [u]sernames.
# The filtered field is shown and does not need to be in the filter name
#
# Example of a regex to filter out everyone with an empty bio:
# b/^$/ # Empty`;

export function Filters() {
    let [code, setCode] = React.useState(initialCode);

    if (nextCode) {
        setCode(nextCode);
        nextCode = undefined;
    }

    return (<>
        <button className="xp-button" onClick={save}>Save and apply</button>
        <textarea id="xp-ui-filters-textarea" spellcheck={false} value={code} onChange={e => setCode(e.target.value)} />
    </>);

    function save() {
        GM.setValue("xp-filters", code);
        filters = compile(code);
    }
}

function compile(code: string) {
    return code
        .split("\n")
        .map(x => x.trim())
        .filter(x => x && !x.startsWith("#"))
        .map(x => x.charAt(0) != "/" ? [x.charAt(0), x.substring(1)] : ["", x])
        .map(([type, x]) => [
            type,
            x.split("#")[0].trim(),
            x.split("#").slice(1).join("#").trim()
        ])
        .map(([type, x, desc]): [string, RegExp | undefined, string | undefined] => {
            let regex: RegExp | undefined;
            try {
                regex = new RegExp(
                    x.substring(x.indexOf("/") + 1, x.lastIndexOf("/")),
                    x.substring(x.lastIndexOf("/") + 1)
                );
            } catch (err) {
                alert("Exception occurred while compiling regex, it has been skipped:\n" + err);
                Logger.warn(err);
            }

            return [
                type,
                regex,
                desc
            ]
        }).filter(([, regex,]) => regex) as [string, RegExp, string | undefined][];
}
