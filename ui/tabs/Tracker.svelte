<script>
  import { channelOnce, send, subscribe } from "../commands.ts";

  let value = $state("");
  let valid = $derived(!/^@?[a-z0-9_]{5,15}$/gi.test(value));

  let mapping = $state({});

  channelOnce("trackers.get", "trackers.set").then(([trackers]) => {
    if (!trackers.length) return;

    const objs = trackers.map((x) => {
      let obj = {};
      obj[x] = undefined;
      return obj;
    });

    Object.assign(mapping, ...objs);
  });

  subscribe("tracker.resolve.fail", () => {
    alert("Account is not a tracker (single following account)");
  });

  subscribe(
    "tracker.resolved",
    (tracker, current) => (mapping[tracker] = current)
  );

  function add() {
    let fixed = value;
    if (fixed.startsWith("@")) fixed = fixed.substring(1);
    mapping[fixed] = undefined;
    send("trackers.set", Object.keys(mapping));
  }

  function remove(tracker) {
    delete mapping[tracker];
    send("trackers.set", Object.keys(mapping));
  }
</script>

<section>
  <input bind:value placeholder="@UserTracker" spellcheck="false" />
  <button disabled={valid} onclick={add}>Add Tracker</button>
</section>

{#each Object.entries(mapping) as [tracker, resolved]}
  <div>
    <span>@{tracker}</span>
    <button onclick={() => send("trackers.resolve", tracker)}>
      {"\u27a4"}
    </button>
    {#if resolved}
      <button
        class="resolved"
        onclick={() => send("follow_list.open", resolved)}
      >
        @{resolved}
      </button>
    {:else}
      <span></span>
    {/if}
    <button onclick={() => remove(tracker)}>X</button>
  </div>
{/each}

<style lang="scss">
  section {
    margin-bottom: 8px;
    display: flex;
    & > input {
      flex: 1;
    }
  }

  input {
    margin-right: 8px;
    padding: 0 8px;
  }

  div {
    display: grid;
    grid-template-columns: 1fr auto 1fr auto;
  }

  span {
    text-align: center;
    line-height: 34px;
  }

  button:disabled {
    color: gray;
  }

  button.resolved {
    text-align: center;
  }
</style>
