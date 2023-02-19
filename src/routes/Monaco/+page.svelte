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
    <MonacoEditor bind:scriptCtx={sample} />
    <div class="half">
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
      <pre>
        {sample}
      </pre>
    </div>
  </div>
</div>

<style>
  .main {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: 100vh;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
  }
  .show {
    display: flex;
    flex-direction: row;
  }
  .half {
    width: 39%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  pre {
    width: 100%;
    height: 44%;
    margin: 0;
    overflow: auto;
    border: 1px solid skyblue;
    outline: none;
    padding: 1rem;
  }
</style>
