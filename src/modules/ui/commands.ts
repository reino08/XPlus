let listeners: { [command: string]: (...data: any) => void } = {};

let frame: HTMLIFrameElement;

export function subscribe(command: string, listener: (...data: any) => void) {
    listeners[command] = listener;
}

export function send(command: string, ...data: any[]) {
    frame.contentWindow.postMessage([command, ...data], "*");
}

export function __setFrame(value: HTMLIFrameElement) {
    frame = value;
}

window.addEventListener("message", event => {
    if (event.origin != "https://local.host:3000" && event.origin != "https://reino08.github.io") return;
    if (!Array.isArray(event.data) || event.data.length < 1) return;

    let [command, ...data] = event.data;

    listeners[command]?.(...data);
});