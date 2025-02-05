<script>
  import { channelOnce, send, subscribe } from "../commands.ts";

  const initial = `# Start a line with a hashtag to have it ignored as a comment
# Press \`Recompile\` when all changes are done to apply them
# Each line contains one regex statement with an optional comment
# The comment following a regex is its name, shown on filtered posts
# Optionally prefix a filter to only apply to [b]ios or [u]sernames.
# The filtered field is shown and does not need to be in the filter name
#
# Example of a regex to filter out everyone with an empty bio:
# b/^$/ # Empty`;

  let value = $state(null);
  let errCount = $state(0);

  const data = channelOnce("filters.get", "filters.set").then(
    ([data]) => (value = data || initial)
  );

  subscribe("filters.compiled", (errs) => {
    for (const err of errs) console.warn(err);
    errCount = errs.length;
  });

  const save = () => send("filters.set", value);
</script>

{#await data}
  <div>Filter data not found.</div>
{:then}
  <button onclick={save}>Save and apply</button>
  <textarea bind:value spellCheck={false}></textarea>

  {#if errCount == -1}
    <div>Waiting...</div>
  {:else if errCount > 0}
    <div class="tab">
      Compiled with {errCount} lines skipped due to errors.
    </div>
  {:else}
    <div class="tab">Compiled successfully.</div>
  {/if}
{/await}

<style>
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
