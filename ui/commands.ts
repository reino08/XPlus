import { onMount } from "svelte";

export function send(command: string, ...data: any[]) {
    console.log("<O", command, data);
    window.parent.postMessage([command, ...data], "https://x.com");
}

const listeners = new Set<(command: string, data?: any) => void>();

window.addEventListener("message", event => {
    if (event.origin != "https://x.com") return;
    if (!Array.isArray(event.data) || event.data.length < 1) return;

    const [command, ...data] = event.data;

    console.log("I>", command, data);
    for (const listener of [...listeners])
        listener(command, data);
});

export function subscribe(command: string, callback: (...data: any[]) => void) {
    onMount(() => {
        const listener = (target: string, data: any) => {
            if (target != command) return;

            callback(...data);
        };

        listeners.add(listener);
        return () => listeners.delete(listener);
    });
}

export function readChannel(src: string, dest: string): Promise<any[]> {
    return new Promise(res => {
        const listener = (target: string, data: any) => {
            if (target != dest) return;

            listeners.delete(listener);
            res(data);
        };

        listeners.add(listener);
        send(src);
    });
}
