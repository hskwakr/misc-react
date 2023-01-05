import Editor from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
import { useState } from 'react';

interface CodeEditorProps {
  initialValue: string;
  onChange: (value: string) => void;
}

const format = (code: string) =>
  prettier.format(code, {
    parser: 'babel',
    plugins: [parser],
  });

const CodeEditor = ({ initialValue, onChange }: CodeEditorProps) => {
  const [code, setCode] = useState(format(initialValue));

  const onFormatClick = () => {
    const newCode = format(code);

    setCode(newCode);
    onChange(newCode);
  };

  return (
    <>
      <button type="button" onClick={onFormatClick}>
        Format
      </button>

      <Editor
        height="500px"
        theme="vs-dark"
        defaultLanguage="javascript"
        value={code}
        onChange={(value) => {
          if (value == null) {
            return;
          }
          setCode(value);
          onChange(value);
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
    </>
  );
};

export default CodeEditor;
