import ReactDOM from 'react-dom/client';
// import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';

const el = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(el!);

const App = () => (
  <div>
    {/* <GuestList /> */}
    <UserSearch />
  </div>
);

root.render(<App />);
