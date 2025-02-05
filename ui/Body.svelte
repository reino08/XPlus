<script>
  import { onMount } from "svelte";
  import { send } from "./commands.ts";

  import Filters from "./tabs/Filters.svelte";
  import FollowList from "./tabs/FollowList.svelte";
  import ThemePicker from "./tabs/ThemePicker.svelte";
  import Tracker from "./tabs/Tracker.svelte";
  import Debug from "./tabs/Debug.svelte";

  let selected = $state(-1);
  const Tabs = [
    ["Filters", Filters],
    ["Follow List", FollowList],
    ["Theme Picker", ThemePicker],
    ["Tracker", Tracker],
    ["Debug", Debug],
  ];

  Object.defineProperty(Tabs, "Selected", {
    get: () => Tabs[selected][1],
  });

  const hide = () => send("menu.hide");
  const reload = () => send("menu.reload");
  const escapeHide = (event) => event.key == "Escape" && hide();

  onMount(
    () => (
      document.addEventListener("keydown", escapeHide),
      () => document.removeEventListener("keydown", escapeHide)
    )
  );
</script>

<nav>
  <button onclick={hide}>Hide</button>
  <button onclick={reload}>Reload</button>

  {#each Tabs as tab, index}
    <button onclick={() => (selected = index)}>{tab[0]}</button>
  {/each}
</nav>

{#if selected != -1}
  <main>
    <Tabs.Selected />
  </main>
{/if}

<style lang="scss">
  main {
    width: 600px;
    scrollbar-width: none;
    &::-webkit-scroll {
      display: none;
    }
  }

  nav {
    width: fit-content;
  }

  nav,
  main {
    display: flex;
    flex-direction: column;
    margin: 16px;
    padding: 8px;
    border-radius: 16px;
    border-left: solid 1px var(--xp-accent);
    border-right: solid 1px var(--xp-accent);
    background-color: #000;
    overflow-y: auto;
  }

  nav button:nth-of-type(2) {
    margin-bottom: 8px;
  }

  button + button {
    margin-top: 4px;
  }
</style>
