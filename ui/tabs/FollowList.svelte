<script>
  import { channel, send } from "../commands.ts";

  let list = $state();

  channel("follow_list.get", "follow_list.set", (data) => (list = data));

  const open = () => send("follow_list.open", user);
</script>

<div>
  {#each list as user}
    <button onclick={open}>
      {user}
    </button>
  {/each}
</div>

<style lang="scss">
  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
  }
</style>
