/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import MDEditor from '@uiw/react-md-editor';
import { useEffect, useState } from 'react';

const TextEditor = () => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    const listener = () => {
      setEditing(false);
    };
    document.addEventListener('click', listener, { capture: true });
    
    return () => {
      document.removeEventListener('click', listener, { capture: true });
    }
  }, []);

  return editing ? (
    <div>
      <MDEditor value={value} onChange={(v) => setValue(v ?? '')} />
    </div>
  ) : (
    <div onClick={() => setEditing(true)}>
      <MDEditor.Markdown source="# Header" />
    </div>
  );
};

export default TextEditor;
