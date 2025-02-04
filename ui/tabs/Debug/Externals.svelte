<script>
  import { readChannel } from "../../commands.ts";

  const data = readChannel("debug.externs.get", "debug.externs.set").then(
    ([data]) => Object.entries(data)
  );
</script>

{#await data}
  <div>Debug data not found.</div>
{:then data}
  <section>
    {#each data as [name, state]}
      <div>
        {name}
        <br />
        <span style:color={["cyan", "lime", "red"][state]}>
          {["Loading", "Succeeded", "Failed"][state]}
        </span>
      </div>
    {/each}
  </section>
{/await}

<style>
  section {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    row-gap: 4px;
    column-gap: 4px;
  }
</style>
