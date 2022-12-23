import ReactDOM from 'react-dom/client';
import App from './components/App';

const el = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(el!);

root.render(<App />);
