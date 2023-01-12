/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import MDEditor from '@uiw/react-md-editor';
import { useEffect, useRef, useState } from 'react';
import './text-editor.css';

const TextEditor = () => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState('# Header');
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        divRef.current != null &&
        event.target != null &&
        divRef.current.contains(event.target as Node)
      ) {
        return;
      }

      setEditing(false);
    };
    document.addEventListener('click', listener, { capture: true });

    return () => {
      document.removeEventListener('click', listener, { capture: true });
    };
  }, []);

  return editing ? (
    <div className="text-editor" ref={divRef}>
      <MDEditor value={value} onChange={(v) => setValue(v ?? '')} />
    </div>
  ) : (
    <div className="text-editor" onClick={() => setEditing(true)}>
      <MDEditor.Markdown source={value} />
    </div>
  );
};

export default TextEditor;
