<script>
  import { channel, send } from "../commands.ts";

  let list = $state();

  channel("follow_list.get", "follow_list.set", (data) => (list = data));

  const open = () => send("follow_list.open", user);
</script>

<div>
  Users you follow will show up in this list. Unfollow them to remove them.
  Click on their name to go to their account. This list is shared between all
  accounts.
</div>

<div class="main">
  {#each list as user}
    <button onclick={open}>
      {user}
    </button>
  {/each}
</div>

<style lang="scss">
  .main {
    margin-top: 8px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
  }
</style>
