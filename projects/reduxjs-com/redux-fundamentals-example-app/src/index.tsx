import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import store from './store';

// Log the initial state
console.log('Initial state: ', store.getState());
// {todos: [...], filters: {...}}

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscrube = store.subscribe(() =>
  console.log('State after dispatch: ', store.getState())
);

// Now, dispatch some actions

store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' });
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers' });
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores' });

store.dispatch({ type: 'todos/todoToggled', payload: 0 });
store.dispatch({ type: 'todos/todoToggled', payload: 1 });

store.dispatch({ type: 'filters/statusFilterChanged', payload: 'Active' });

store.dispatch({
  type: 'filters/colorFilterChanged',
  payload: { color: 'red', changeType: 'added' },
});

// Stop listening to state updates
unsubscrube();

// Dispatch one more action to see what happens

store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating a store' });

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
