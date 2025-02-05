<script>
  import { channel } from "./commands.ts";
  import Body from "./Body.svelte";

  channel(
    "theme.get",
    "theme.set",
    (color) =>
      color && document.documentElement.style.setProperty("--xp-accent", color)
  );
</script>

<div id="App">
  <Body></Body>
</div>

<style lang="scss">
  :root {
    --xp-accent: #1d9bf0;
  }

  * {
    font-size: 15px;
    font-family: sans-serif;
    color: White;
    font-size: 15px;
  }

  #App {
    display: flex;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
  }
</style>
