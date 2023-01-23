import todoReducer from './features/todos/todosSlice';
import filterReducer from './features/filters/filtersSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos, handled by `todosReducer`
    todos: todoReducer,
    filters: filterReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
