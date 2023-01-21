import todoReducer from './features/todos/todosSlice';
import filterReducer from './features/filters/filtersSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  // Define a top level state field named `todos`, handled by `todosReducer`
  todos: todoReducer,
  filters: filterReducer,
});

export default rootReducer;
