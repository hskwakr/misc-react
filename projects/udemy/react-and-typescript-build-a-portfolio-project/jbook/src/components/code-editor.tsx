import Editor from '@monaco-editor/react';

interface CodeEditorProps {
  initialValue: string;
  onChange: (value: string) => void;
}

const CodeEditor = ({ initialValue, onChange }: CodeEditorProps) => (
  <Editor
    height="500px"
    theme="vs-dark"
    defaultLanguage="javascript"
    defaultValue={initialValue}
    onChange={(value) => {
      onChange(value ?? '');
    }}
    options={{
      wordWrap: 'on',
      minimap: { enabled: false },
      showUnused: false,
      folding: false,
      lineNumbersMinChars: 3,
      tabSize: 2,
      fontSize: 16,
      scrollBeyondLastLine: false,
      automaticLayout: true,
    }}
  />
);

export default CodeEditor;
