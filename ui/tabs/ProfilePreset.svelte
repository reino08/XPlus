<script>
    import { channelOnce, send } from "../commands.ts";

    let state = $state();
    const data = channelOnce("profile_preset.get", "profile_preset.set").then(
        ([data]) => (state = data),
    );

    const is_invalid = (input, length) =>
        input.replaceAll(/\\./g, ".").length > length;
    let invalid = $derived({
        name: is_invalid(state.name, 50),
        description: is_invalid(state.description, 160),
        location: is_invalid(state.location, 30),
        url: is_invalid(state.url, 100),
    });

    const save = () => send("profile_preset.set", { ...state });
    const apply = () => send("profile_preset.apply", { ...state });
</script>

<div>Use \ for a special randomized character</div>
<div>\\ is converted to \</div>
<div>\h is converted to a random hex (0-9, a-f)</div>
<div>Keep a line empty to reuse the current value</div>

{#await data then}
    <section>
        <button onclick={save}>Save without applying</button>
        <button onclick={apply}>Save and apply</button>
    </section>

    <label for="name">Display name (max: 50)</label>
    <input
        type="text"
        name="name"
        bind:value={state.name}
        class:invalid={invalid.name}
    />

    <label for="name">Bio (max: 160)</label>
    <input
        type="text"
        name="bio"
        bind:value={state.description}
        class:invalid={invalid.description}
    />

    <label for="name">Location (max: 30)</label>
    <input
        type="text"
        name="location"
        bind:value={state.location}
        class:invalid={invalid.location}
    />

    <label for="name">Website URL (max: 100)</label>
    <input
        type="text"
        name="url"
        bind:value={state.url}
        class:invalid={invalid.url}
    />
{/await}

<style>
    section {
        display: flex;
    }

    section button {
        flex: 1;
    }

    .invalid {
        border: solid 1px red;
        color: red;
    }
</style>
