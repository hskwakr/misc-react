import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* Render a `<Provider>` around the entire `<App>`, */}
    {/* and pass the Redux store to as a prop */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
