import { useState, useEffect } from 'react';
import CodeEditor from './code-editor';
import Preview from './preview';
import bundle from '../bundler';
import Resizable from './resizable';

const initialValue = `
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <h1>Hi there!</h1>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
`;

const CodeCell = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  useEffect(() => {
    const execute = async () => {
      const output = await bundle(input);
      setCode(output);
    };

    const timer = setTimeout(() => {
      void execute();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <Resizable direction="vertical">
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={initialValue}
            onChange={(value) => setInput(value)}
          />
        </Resizable>
        <Preview code={code} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
