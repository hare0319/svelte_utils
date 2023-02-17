<script lang="ts">
  import MonacoEditor from "$lib/components/MonacoEditor/MonacoEditor.svelte";

  let preElm: HTMLPreElement;
  let sample = `
name: yaml editor
editor: monaco editor
platform:
  - svelte
  - vite
support:
  language: yaml
  theme: vs-dark
  `;
</script>

<div class="main">
  <h1>Monaco Editor in Svelte</h1>

  <p>The editor should sync with following text</p>

  <div class="show">
    <pre
      contenteditable
      spellcheck="false"
      bind:this={preElm}
      bind:textContent={sample}
      on:blur={() => {
        sample = preElm.innerText;
      }}>
    {sample}
  </pre>
    <div class="gap" />
    <pre>
    {sample}
  </pre>
  </div>

  <MonacoEditor bind:scriptCtx={sample} />
</div>

<style>
  .main {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: 50rem;
    width: 75%;
    margin-left: auto;
    margin-right: auto;
  }
  .show {
    display: flex;
    flex-direction: row;
    border: 1px, solid, skyblue;
  }
  .gap {
    width: 2rem;
  }
</style>
