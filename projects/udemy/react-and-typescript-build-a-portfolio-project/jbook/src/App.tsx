import { useEffect, useState } from 'react';
import * as esbuild from 'esbuild-wasm';

const App = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const startService = async () => {
    const service = await esbuild.startService({
      worker: true,
      wasmURL: '/esbuild.wasm',
    });

    console.log(service);
  };

  useEffect(() => {
    void startService();
  }, []);

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
