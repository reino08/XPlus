<script>
  import Externals from "./Debug/Externals.svelte";
  import GraphQl from "./Debug/GraphQL.svelte";

  let selected = $state(0);
  const Tabs = [
    ["Externals", Externals],
    ["GraphQL", GraphQl],
  ];

  Object.defineProperty(Tabs, "Selected", {
    get: () => Tabs[selected][1],
  });
</script>

<div id="debug-tabs">
  {#each Tabs as tab, index}
    <button onclick={() => (selected = index)}>{tab[0]}</button>
  {/each}
</div>

<div id="debug">
  <Tabs.Selected />
</div>

<style>
  #debug-tabs {
    display: flex;
    margin-bottom: 4px;

    & > * {
      flex: 1;
      margin: 0 2px;
      text-align: center;
    }
  }
</style>
