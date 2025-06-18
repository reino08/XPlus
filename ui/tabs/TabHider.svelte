<script>
  import { channel, send, get } from "../commands.ts";

  let value = $state();

  channel("hidden_tabs.get", "hidden_tabs.set", (data) => (value = data));

  const save = () => send("hidden_tabs.set", value);
</script>

<section>
  {#await get("hidden_grok") then value}
    <label for="grok">Hidden grok drawer</label>
    <input
      name="grok"
      type="checkbox"
      checked={value}
      onchange={(e) => send("set", "hidden_grok", e.target.checked)}
    />
  {/await}

  {#await get("hidden_dms") then value}
    <label for="dms">Hidden DMs drawer</label>
    <input
      name="dms"
      type="checkbox"
      checked={value}
      onchange={(e) => send("set", "hidden_dms", e.target.checked)}
    />
  {/await}
</section>

<div>
  Control alt click a tab on the sidebar, or enter the name of a tab on the
  sidebar to remove it. One entry per line.
</div>
<button onclick={save}>Save and apply</button>
<textarea bind:value spellCheck={false}></textarea>

<style>
  div {
    margin-bottom: 4px;
  }

  textarea {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 8px;
    white-space: nowrap;
    resize: none;
    margin: 8px 0;
  }
</style>
