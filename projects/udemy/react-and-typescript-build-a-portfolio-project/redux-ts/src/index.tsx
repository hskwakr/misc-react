import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(el!);

const App = () => (
  <div>
    <p>Hi</p>
    <p>Hello</p>
  </div>
);

root.render(<App />);
