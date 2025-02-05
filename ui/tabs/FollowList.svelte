<script>
  import { channel, send } from "../commands.ts";

  channel("follow_list.get", "follow_list.set", (data) => (list = data));

  let list = $state(undefined);
</script>

<div>
  {#each list as user}
    <button onclick={() => send("follow_list.open", user)}>
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
