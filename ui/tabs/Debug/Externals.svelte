<script>
  import { channelOnce, send } from "../../commands.ts";

  const data = channelOnce("debug.externs.get", "debug.externs.set").then(
    ([data]) => Object.entries(data)
  );
</script>

{#await data}
  <div>Debug data not found.</div>
{:then data}
  <section>
    {#each data as [name, state]}
      <button on:click={() => send("debug.externs.open", name)}>
        {name}
        <br />
        <span style:color={["cyan", "lime", "red"][state]}>
          {["Loading", "Succeeded", "Failed"][state]}
        </span>
      </button>
    {/each}
  </section>
{/await}

<style>
  section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 4px;
    column-gap: 4px;
  }
</style>
