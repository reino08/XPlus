<script>
  import { channelOnce, send, subscribe } from "../commands.ts";

  const initial = `# Start a line with a hashtag to have it ignored as a comment
# Press \`Recompile\` when all changes are done to apply them
# Each line contains one regex statement with an optional comment
# The comment following a regex is its name, shown on filtered posts
# Optionally prefix a filter to only apply to [b]ios or [u]sernames.
# The filtered field is shown and does not need to be in the filter name
#
# Example filters:

# -- Empty Bio
# b/^$/ # Empty

# -- War Spammers
# /\ud83c\uddee\ud83c\uddf1/g # Israel Flag
# /\ud83c\uddf5\ud83c\uddf8/g # Palestine Flag
# /\ud83c\uddfa\ud83c\udde6/g # Ukraine Flag
# /\ud83c\uddf7\ud83c\uddfa/g # Russian Flag
# /\ud83c\udf49/g # Pro-Palestine Spammers

# -- 18+/OF/NSFW accounts
# /\ud83d(\udd1e|\udc45)/g # NSFW account

# -- Religious Spammers
# /\u271d/g # Christians
# /\u2721/g # Jews
# /\u262a/g # Muslims
# b/atheist/i # Atheists
# b/agnostic/i # Agnostics

# -- Roleplay/Alt Accounts
# /(\s+)(uwu|owo|furry)/gi # RP
# b/(nsfw|priv|private|main)\s*(:|acc|@)/gi # Alt
# b/(ooc|parody)/gi # Parody

# -- Groomers/Online Daters
# b/taken/gi # E-Dater
# b/single/gi # E-Dater
# b/tellonym.me\//g # E-Groomer

# -- Minors
# b/minor/gi # Minor
# b/(?<![^\s])\s?1[0-7](?![^\s[:punct:]])/g # Minor

# -- Annoying Poltical Spammers
# /\u262d/g # Communist Symbolism
# b/liberal/gi # Liberals
# b/conservative/gi # Conservatives

# -- Sports/Celebrity Worshippers
# b/(\s+)stan(?<![a-z])/gi # Celebrity "stans"
# b/(football|basketball|baseball|soccer|superbowl)/gi # Sports

# -- Annoying Twitter Stuff
# /hrt/gim # Groomers
# /(he|she|they|it|xe)\/(him|her|they|them|she|it|xer)/gi # Pronouns
# b/(^|\s+)\/(j|hj|s|srs|nsrs|gen|tw)($|\s+)/g # Tone Indicators
# b/dn(i|f)/gi # "DNI"
`;

  let value = $state(null);
  let errCount = $state(0);

  const data = channelOnce("filters.get", "filters.set").then(
    ([data]) => (value = data || initial)
  );

  subscribe("filters.compiled", (errs) => {
    for (const err of errs) console.warn(err);
    errCount = errs.length;
  });

  const save = () => send("filters.set", value);
</script>

{#await data}
  <div>Filter data not found.</div>
{:then}
  <button onclick={save}>Save and apply</button>
  <textarea bind:value spellCheck={false}></textarea>

  {#if errCount == -1}
    <div>Waiting...</div>
  {:else if errCount > 0}
    <div class="tab">
      Compiled with {errCount} lines skipped due to errors.
    </div>
  {:else}
    <div class="tab">Compiled successfully.</div>
  {/if}
{/await}

<style>
  textarea {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 8px;
    white-space: nowrap;
    resize: none;
    margin: 8px 0;
  }
</style>
