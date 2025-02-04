import "./index.css";

import { mount } from "svelte";
import App from "./App.svelte";

// Side effects
import "./commands.ts";

mount(App, {
    target: document.body,
});
