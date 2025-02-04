import { send, subscribe } from "./commands.ts";

type Filter = [string, RegExp, string | undefined];

export let filters: Filter[] = [];

GM.getValue("xp-filters").then(value => {
    let code = (value as string | undefined);
    let errs = undefined;
    if (code) [filters, errs] = compile(code);

    subscribe("filters.get", () => {
        send("filters.set", code);
        if (errs)
            send("filters.compiled", errs);
    });
});

subscribe("filters.set", (code) => {
    GM.setValue("xp-filters", code);
    let errs: Error[];
    [filters, errs] = compile(code);
    send("filters.compiled", errs);
});

function compile(code: string): [Filter[], Error[]] {
    const errs = [];
    return [code
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
                errs.push(err);
            }

            return [
                type,
                regex,
                desc
            ]
        }).filter(([, regex,]) => regex) as [string, RegExp, string | undefined][], errs];
}
