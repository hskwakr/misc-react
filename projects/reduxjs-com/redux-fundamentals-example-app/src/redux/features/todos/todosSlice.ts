import { createAction, createReducer } from '@reduxjs/toolkit';
import { Color } from '../../../color';

interface TodoState {
  id: number;
  text: string;
  completed: boolean;
  color?: Color;
}

const initialState: TodoState[] = [];

function nextTodoId(todos: TodoState[]) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

const added = createAction<string>('todos/todoAdded');
const deleted = createAction<number>('todos/todoDeleted');
const toggled = createAction<number>('todos/todoToggled');
const colorSelected = createAction<{ id: number; color: Color }>(
  'todos/colorSelected'
);
const allCompleted = createAction('todos/allCompleted');
const completedCleared = createAction('todos/completedCleared');

const todoReducer = createReducer(initialState, (builder) => {
  builder.addCase(added, (state, action) => {
    return [
      ...state,
      {
        id: nextTodoId(state),
        text: action.payload,
        completed: false,
      },
    ];
  });

  builder.addCase(deleted, (state, action) => {
    return state.filter((todo) => todo.id !== action.payload);
  });

  builder.addCase(toggled, (state, action) => {
    return state.map((todo) => {
      if (todo.id !== action.payload) {
        return todo;
      }

      return {
        ...todo,
        completed: !todo.completed,
      };
    });
  });

  builder.addCase(colorSelected, (state, action) => {
    const { id, color } = action.payload;

    return state.map((todo) => {
      if (todo.id !== id) {
        return todo;
      }

      return {
        ...todo,
        color: color,
      };
    });
  });

  builder.addCase(allCompleted, (state) => {
    return state.map((todo) => {
      return {
        ...todo,
        completed: true,
      };
    });
  });

  builder.addCase(completedCleared, (state) => {
    return state.filter((todo) => !todo.completed);
  });
});

export default todoReducer;
