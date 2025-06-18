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

function __createSubscriber(filter: (target: string, data: any) => boolean, callback: (...data: any[]) => void, once = false) {
    const listener = (target: string, data: any) => {
        if (!filter(target, data)) return;

        if (once) listeners.delete(listener);
        callback(...data);
    };

    return listener;
}

export function subscribe(command: string, callback: (...data: any[]) => void, once = false) {
    onMount(() => {
        const listener = __createSubscriber((target) => target == command, callback, once);
        listeners.add(listener);
        return () => listeners.delete(listener);
    });
}

export function channelOnce(src: string, dest: string): Promise<any[]> {
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

export function channel(src: string, dest: string, callback: (...data: any[]) => void) {
    subscribe(dest, callback);
    onMount(() => send(src));
}

export function get<T>(prop: string): Promise<T> {
    send("get", prop);

    return new Promise(res => {
        listeners.add(__createSubscriber(
            (target, data) => target == "set" && data[0] == prop,
            (_, value) => res(value),
            true)
        );
    });
}
