import Editor, { OnMount } from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
import { useRef } from 'react';

interface CodeEditorProps {
  initialValue: string;
  onChange: (value: string) => void;
}

type OnMountParams = Parameters<OnMount>;

const format = (code: string) =>
  prettier.format(code, {
    parser: 'babel',
    plugins: [parser],
    useTabs: false,
    semi: true,
    singleQuote: true,
  });

const CodeEditor = ({ initialValue, onChange }: CodeEditorProps) => {
  const editorRef = useRef<OnMountParams[0] | null>(null);

  const onEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor;

    editor.onDidChangeModelContent(() => {
      onChange(editor.getValue());
    });
  };

  const onFormatClick = () => {
    if (editorRef.current == null) {
      return;
    }

    const unformatted = editorRef.current.getModel()?.getValue();
    if (unformatted == null) {
      return;
    }

    const formatted = format(unformatted);
    editorRef.current.setValue(formatted);
  };

  const fmtInitValue = format(initialValue);

  return (
    <>
      <button
        type="button"
        className="button button-format is-primary is-small"
        onClick={onFormatClick}
      >
        Format
      </button>

      <Editor
        height="500px"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={fmtInitValue}
        onMount={onEditorDidMount}
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
    </>
  );
};

export default CodeEditor;
