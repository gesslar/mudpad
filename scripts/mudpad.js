import { init } from 'https://esm.sh/modern-monaco';

let editor;

async function initializeEditor() {
  const monaco = await init();
  editor = monaco.editor.create(document.getElementById('container'), {
    value: '',
    language: 'plaintext',
    theme: 'vs-dark',
    glyphMargin: false,
    lineNumbers: 'off',
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    contextmenu: false,
    tabSize: 2,
    insertSpaces: true,
    renderLineHighlight: 'none',
  });
}

function wrapIt() {
  if (!editor || typeof wrapify !== 'function') return;
  editor.setValue(wrapify(editor.getValue(), 80, 0));
}

window.initializeEditor = initializeEditor;
window.wrapIt = wrapIt;

window.addEventListener('DOMContentLoaded', () => {
  initializeEditor().catch((error) => {
    console.error('Failed to initialize Monaco', error);
  });
});
