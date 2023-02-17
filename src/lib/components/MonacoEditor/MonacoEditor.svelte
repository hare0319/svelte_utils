<script lang="ts">
  import * as monaco from "monaco-editor";
  import { onMount } from "svelte";

  export let scriptCtx: string;
  let updatedCtx: string = "";

  let monacoElm: HTMLElement;
  let editor: monaco.editor.IStandaloneCodeEditor;

  $: editor?.setValue(scriptCtx);

  onMount(async () => {
    await import("./MonacoEditor");

    editor = monaco.editor.create(monacoElm, {
      value: scriptCtx,
      language: "yaml",
      roundedSelection: false,
      scrollBeyondLastLine: false,
      minimap: {
        enabled: false,
      },
      theme: "vs-dark",
    });

    editor.onDidChangeModelContent(() => {
      // editor.onDidBlurEditorText(() => {
      updatedCtx = editor.getValue();
    });

    return () => {
      editor.dispose();
    };
  });
</script>

<div
  bind:this={monacoElm}
  class="editorAnchor"
  on:change={() => (scriptCtx = updatedCtx)}
/>

<style>
  .editorAnchor {
    width: 100%;
    height: 100%;
  }
</style>
