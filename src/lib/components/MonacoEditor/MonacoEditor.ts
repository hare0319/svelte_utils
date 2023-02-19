import * as monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker&url";
import yamlWorker from "monaco-editor/esm/vs/basic-languages/yaml/yaml?worker&url";
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker&url";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker&url";

self.MonacoEnvironment = {
  getWorker: (_moduleId: any, label: string) => {
    const getWorkerModule = (moduleUrl: string, label: string) => {
      return new Worker(moduleUrl, {
        name: label,
        type: "module",
      });
    };

    if (label === "json") {
      return getWorkerModule(jsonWorker, label);
      // return new jsonWorker();
    }
    if (label === "yaml" || label === "yml") {
      return getWorkerModule(yamlWorker, label);
      // return new yamlWorker();
    }
    if (label === "typescript" || label === "javascript") {
      return getWorkerModule(tsWorker, label);
      // return new tsWorker();
    }
    return getWorkerModule(editorWorker, label);
    // return new editorWorker();
  },
};

monaco.editor.defineTheme("cust-vs-dark", {
  base: "vs-dark",
  inherit: true,
  colors: {
    "editor.background": "#1f2937",
    "editor.lineHighlightBorder": "#354255",
  },
  rules: [],
} satisfies monaco.editor.IStandaloneThemeData);

monaco.editor.defineTheme("cust-vs", {
  base: "vs",
  inherit: true,
  colors: {
    "editor.background": "#e5e7eb",
    "editor.lineHighlightBorder": "#cbcbcb",
  },
  rules: [],
} satisfies monaco.editor.IStandaloneThemeData);
