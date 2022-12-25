import { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');
  
  const onClick = () => {
    setCode(input);
  };

  return (
    <div>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      <div>
        <button type="button" onClick={onClick}>
          Submit
        </button>
      </div>

      <pre>{code}</pre>
    </div>
  );
};
export default App;
