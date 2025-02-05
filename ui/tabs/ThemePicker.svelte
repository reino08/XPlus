<script>
  import { channelOnce, send } from "../commands.ts";

  const data = channelOnce(
    "theme_picker.data.get",
    "tab.theme_picker.data.set"
  ).then(([colors]) => mapColors(colors));

  function mapColors(colors) {
    return Object.keys(colors)
      .filter((x) => x.endsWith("600"))
      .filter((x) => !x.startsWith("primary"))
      .map((x) => x.substring(0, x.length - 3))
      .map((x) => [
        x,
        Object.entries(colors)
          .filter(([key]) => key.startsWith(x))
          .map(([key, value]) => [key, value]),
      ]);
  }
</script>

{#await data}
  <div>Theme data not found.</div>
{:then colors}
  {#each colors as [name, list]}
    <div>
      {name}
      <div>
        {#each list as [key, value]}
          <button
            style:background-color={value}
            onclick={() => send("theme_picker.current.set", key)}
            aria-label={key}
            title={key}
          ></button>
        {/each}
      </div>
    </div>
  {/each}
{/await}

<style lang="scss">
  div {
    font-size: 24px;
    text-transform: capitalize;

    & > div {
      display: flex;

      & > button {
        aspect-ratio: 1/1;
        border: 0;
        cursor: pointer;
        flex: 1 1;
        margin: 0 4px;
      }
    }
  }
</style>
