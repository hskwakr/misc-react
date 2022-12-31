import { useEffect, useRef, useState } from 'react';
import * as esbuild from 'esbuild-wasm';
import { unpkgPathPlugin } from './plugin/unpkg-path-plugin';
import { fetchPlugin } from './plugin/fetch-plugin';

const App = () => {
  const serverRef = useRef<esbuild.Service | null>(null);
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const startService = async () => {
    serverRef.current = await esbuild.startService({
      worker: true,
      wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm',
    });
  };

  useEffect(() => {
    void startService();
  }, []);

  const onClick = async () => {
    if (serverRef.current === null) {
      return;
    }

    const result = await serverRef.current.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(input)],
      define: {
        'process.env.NODE_ENV': '"production"',
        global: 'window',
      },
    });

    setCode(result.outputFiles[0].text);

    try {
      // eslint-disable-next-line no-eval
      eval(result.outputFiles[0].text);
    } catch (error) {
      let message = '';

      if (typeof error === 'string') {
        message = error;
      }
      if (error instanceof Error) {
        message = error.message;
      }

      alert(message);
    }
  };

  return (
    <div>
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

      <pre>{code}</pre>
    </div>
  );
};

export default App;
