import { useState } from 'react';
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

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <Resizable direction="vertical">
        <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
          <CodeEditor
            initialValue={initialValue}
            onChange={(value) => setInput(value)}
          />
          <div>
            <button
              type="button"
              onClick={() => {
                void onClick();
              }}
            >
              Submit
            </button>
          </div>
          <Preview code={code} />
        </div>
      </Resizable>
  );
};

export default CodeCell;
