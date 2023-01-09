import { useEffect, useRef } from 'react';
import './preview.css';

const html = `
<html>
  <head>
    <style>html { background-color: white; }</style>
  </head>
  <body>
    <div id="root"></div>
    <script>
      const handleError = (error) => {
        const root = document.querySelector('#root')
        root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + error + '</div>'
        console.error(error)
      }
      
      window.addEventListener('error', (event) => {
        event.preventDefault()
        handleError(event.error)
      })
      
      window.addEventListener('message', (event) => {
        try {
          eval(event.data) 
        } catch (error) {
          handleError(error)
        }
      }, false)
    </script>
  </body>
</html>
`;

interface PreviewProps {
  code: string;
  bundlingStatus: string;
}

const Preview = ({ code, bundlingStatus }: PreviewProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current === null) {
      return;
    }

    iframeRef.current.srcdoc = html;

    setTimeout(() => {
      iframeRef.current?.contentWindow?.postMessage(code, '*');
    }, 50);
  }, [code]);

  return (
    <div className="preview-wrapper">
      <iframe
        ref={iframeRef}
        sandbox="allow-scripts"
        srcDoc={html}
        title="preview"
      />
      {bundlingStatus.length > 0 && (
        <div className="preview-error">
          <h4>Compilation Error</h4>
          <p>{bundlingStatus}</p>
        </div>
      )}
    </div>
  );
};

export default Preview;
