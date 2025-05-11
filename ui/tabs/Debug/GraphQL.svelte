<script>
  import { channelOnce } from "../../commands.ts";

  const data = channelOnce("debug.graphql.get", "debug.graphql.set").then(
    ([data]) => Object.entries(data)
  );

  async function saveToFile() {
    const element = document.createElement("a");
    element.href = URL.createObjectURL(
      new Blob(
        [
          (await data)
            .map(
              ([_, value]) =>
                `${value.operationName}:${value.operationType}:${value.queryId}:${value.metadata.featureSwitches.join()}:${value.metadata.fieldToggles.join()}`
            )
            .join("\n"),
        ],
        { type: "text/plain" }
      )
    );
    element.download = "graphql.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    URL.revokeObjectURL(element.href);
  }
</script>

{#await data}
  <div>Debug data not found.</div>
{:then data}
  <section>
    <button on:click={saveToFile}>Save to file</button>
    {#each data as [key, value]}
      <details class="tab">
        <summary>
          {key}
          <button on:click={() => console.log(value)}>Log to console</button>
        </summary>
        <div>Type: {value["operationType"]}</div>
        <div>Query ID: {value["queryId"]}</div>
        <details class="tab">
          <summary>Metadata</summary>
          Features:
          <ul>
            {#each value.metadata.featureSwitches as data}
              <li>{data}</li>
            {/each}
          </ul>
          Field Toggles:
          <ul>
            {#each value.metadata.fieldToggles as data}
              <li>{data}</li>
            {/each}
          </ul>
        </details>
      </details>
    {/each}
  </section>
{/await}

<style>
  section {
    display: flex;
    flex-direction: column;
  }

  button {
    float: right;
  }

  div {
    margin: 4px 0;
  }
</style>
