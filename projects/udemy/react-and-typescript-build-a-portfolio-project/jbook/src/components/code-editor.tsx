import Editor from '@monaco-editor/react';

const CodeEditor = () => (
  <Editor
    height="500px"
    theme="vs-dark"
    defaultLanguage="javascript"
    options={{
      wordWrap: 'on',
    }}
  />
);

export default CodeEditor;
