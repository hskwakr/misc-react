import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';

const TextEditor = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <MDEditor
        value={value}
        onChange={(v) => {
          setValue(v ?? '');
        }}
      />
    </div>
  );
};

export default TextEditor;
