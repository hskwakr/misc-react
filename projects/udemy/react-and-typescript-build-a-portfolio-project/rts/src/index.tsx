import ReactDOM from 'react-dom/client';
import UserSearch from './refs/UserSearch';
// import GuestList from './state/GuestList';
// import UserSearch from './state/UserSearch';
// import EventComponent from './events/EventComponent';

const el = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(el!);

const App = () => (
  <div>
    {/* <GuestList /> */}
    {/* <UserSearch /> */}
    {/* <EventComponent /> */}
    <UserSearch />
  </div>
);

root.render(<App />);
