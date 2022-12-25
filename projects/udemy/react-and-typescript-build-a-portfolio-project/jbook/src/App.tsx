import { useEffect, useRef, useState } from 'react';
import * as esbuild from 'esbuild-wasm';

const App = () => {
  const serverRef = useRef<esbuild.Service | null>(null);
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const startService = async () => {
    serverRef.current = await esbuild.startService({
      worker: true,
      wasmURL: '/esbuild.wasm',
    });
  };

  useEffect(() => {
    void startService();
  }, []);

  const onClick = () => {
    if (serverRef.current === null) {
      return;
    }

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
