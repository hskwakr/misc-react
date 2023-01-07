import { useEffect, useRef } from 'react';

const html = `
<html>
  <head></head>
  <body>
    <div id="root"></div>
    <script>
      window.addEventListener('message', (event) => {
        try {
          eval(event.data) 
        } catch (error) {
          const root = document.querySelector('#root')
          root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + error + '</div>'
          console.error(error)
        }
      }, false)
    </script>
  </body>
</html>
`;

interface PreviewProps {
  code: string;
}

const Preview = ({ code }: PreviewProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current === null) {
      return;
    }

    iframeRef.current.srcdoc = html;
    iframeRef.current.contentWindow?.postMessage(code, '*');
  }, [code]);

  return (
    <iframe
      ref={iframeRef}
      sandbox="allow-scripts"
      srcDoc={html}
      title="preview"
      style={{ backgroundColor: 'white' }}
    />
  );
};

export default Preview;
