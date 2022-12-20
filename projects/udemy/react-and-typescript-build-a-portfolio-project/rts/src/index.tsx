import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el!);

function App() {
  return (
    <div>
      <h1>Hi there!</h1>
    </div>
  );
}

root.render(<App />);
