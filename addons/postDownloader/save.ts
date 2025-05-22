GM_registerMenuCommand("Save results", () => {
    const id = prompt("Enter numerical user ID:");
    if (!id) return;

    const results = GM_listValues()
        .filter(key => key.startsWith(`results_${id}_`))
        .map(key => GM_getValue(key, []))
        .filter(value => Array.isArray(value) && value.length)
        .flatMap(x => x)
        .map(x => JSON.stringify(x))
        .join("\n");

    GM_download({
        url: URL.createObjectURL(new Blob([results], { type: "text/plain" })),
        name: `post_downloader_results_${id}.txt`,
    });
});
