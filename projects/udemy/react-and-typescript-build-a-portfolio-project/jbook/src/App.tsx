import { useEffect, useRef, useState } from 'react';
import * as esbuild from 'esbuild-wasm';
import { unpkgPathPlugin } from './plugin/unpkg-path-plugin';
import { fetchPlugin } from './plugin/fetch-plugin';

const App = () => {
  const serverRef = useRef<esbuild.Service | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [input, setInput] = useState('');
  // const [code, setCode] = useState('');

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
    if (iframeRef.current === null) {
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

    // setCode(result.outputFiles[0].text);

    iframeRef.current.contentWindow?.postMessage(
      result.outputFiles[0].text,
      '*'
    );
  };

  const html = `
  <html>
    <head></head>
    <body>
      <div id="root"></div>
      <script>
        window.addEventListener('message', (event) => {
          eval(event.data)
        }, false)
      </script>
    </body>
  </html>
  `;

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

      {/* <pre>{code}</pre> */}
      <iframe
        ref={iframeRef}
        sandbox="allow-scripts"
        srcDoc={html}
        title="code-preview"
      />
    </div>
  );
};

export default App;
