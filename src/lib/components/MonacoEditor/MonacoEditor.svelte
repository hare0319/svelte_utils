<script lang="ts">
  import type monaco from "monaco-editor";
  import { onMount } from "svelte";

  export let scriptCtx: string;

  let monacoElm: HTMLElement;
  let editor: monaco.editor.IStandaloneCodeEditor;

  const handle_update = (newEditorCtx: string) => {
    if (!(editor && editor.getModel())) return;
    const model = editor.getModel();
    if (!model) return;
    model.pushEditOperations(
      [],
      [
        {
          range: model.getFullModelRange(),
          text: newEditorCtx,
        },
      ],
      () => null
    );
    // model.setValue(newEditorCtx);
  };

  onMount(async () => {
    const monaco = await import("monaco-editor");
    await import("./MonacoEditor");

    editor = monaco.editor.create(monacoElm, {
      value: scriptCtx,
      language: "yaml",
      roundedSelection: false,
      scrollBeyondLastLine: false,
      theme: "cust-vs-dark",
    });

    editor.onDidBlurEditorText(() => {
      scriptCtx = editor.getValue();
    });

    return () => {
      editor.dispose();
    };
  });

  $: handle_update(scriptCtx);
</script>

<div bind:this={monacoElm} class="editorAnchor" />

<style>
  .editorAnchor {
    width: 60%;
    height: 90vh;
  }
</style>
