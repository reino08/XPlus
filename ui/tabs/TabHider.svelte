<script>
  import { channel, send } from "../commands.ts";

  let value = $state();

  channel("hidden_tabs.get", "hidden_tabs.set", (data) => (value = data));

  const save = () => send("hidden_tabs.set", value);
</script>

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
