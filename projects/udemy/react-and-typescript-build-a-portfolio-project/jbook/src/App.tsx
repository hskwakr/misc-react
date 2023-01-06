import { useState } from 'react';
import CodeEditor from './components/code-editor';
import Preview from './components/preview';
import bundle from './bundler';

const initialValue = `
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <h1>Hi there!</h1>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
`;

const App = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const onClick = async () => {
    const output = await bundle(input)
    setCode(output);
  };

  return (
    <div>
      <CodeEditor
        initialValue={initialValue}
        onChange={(value) => setInput(value)}
      />
      <textarea value={input} onChange={(e) => setInput(e.target.value)} />
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
  );
};

export default App;
