import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { Color } from '../../../color';
import { RootState } from '../../store';
import { StatusFilters } from '../filters/filtersSlice';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  color?: Color;
}

const initialState: { entities: Todo[] } = { entities: [] };

function nextTodoId(todos: Todo[]) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded: (state, action: PayloadAction<string>) => {
      const text = action.payload;
      const todo: Todo = {
        id: nextTodoId(state.entities),
        text,
        completed: false,
      };

      state.entities[todo.id] = todo;
    },

    todoDeleted: (state, action: PayloadAction<number>) => {
      state.entities = state.entities.filter(
        (todo) => todo.id !== action.payload
      );
    },

    todoToggled: (state, action: PayloadAction<number>) => {
      const todoId = action.payload;
      const todo = state.entities[todoId];
      todo.completed = !todo.completed;
    },

    todoColorSelected: {
      reducer(state, action: PayloadAction<{ todoId: number; color: Color }>) {
        const { color, todoId } = action.payload;
        state.entities[todoId].color = color;
      },
      prepare(todoId, color) {
        return {
          payload: { todoId, color },
        };
      },
    },

    todoAllCompleted: (state) => {
      for (const todo of state.entities) {
        todo.completed = true;
      }
    },

    todoCompletedCleared: (state) => {
      for (const todo of state.entities) {
        if (todo.completed) {
          state.entities = state.entities.filter((t) => t.id !== todo.id);
        }
      }
    },
  },
});

export default todosSlice.reducer;

export const {
  todoAdded,
  todoDeleted,
  todoToggled,
  todoColorSelected,
  todoAllCompleted,
  todoCompletedCleared,
} = todosSlice.actions;

const selectTodoEntities = (state: RootState) => state.todos.entities;

export const selectTodos = createSelector(
  selectTodoEntities,
  (entities) => entities
);

export const selectTodoById = (state: RootState, todoId: number) => {
  return selectTodoEntities(state)[todoId];
};

export const selectFilteredTodos = createSelector(
  // First input selector: all todos
  selectTodos,
  // Second input selector: all filter values
  (state: RootState) => state.filters,
  // Output selector: receives both values
  (todos, filters) => {
    const { status, colors } = filters;

    const showAllCompletions = status === StatusFilters.All;

    if (showAllCompletions && colors.length === 0) {
      return todos;
    }

    const completedStatus = status === StatusFilters.Completed;

    // Return either active or completed todos based on filter
    return todos.filter((todo) => {
      const statusMatches =
        showAllCompletions || todo.completed === completedStatus;

      const colorMatches =
        colors.length === 0 || (todo.color && colors.includes(todo.color));

      return statusMatches && colorMatches;
    });
  }
);

export const selectFilteredTodoIds = createSelector(
  // Pass our other memoized selector as an input
  selectFilteredTodos,
  // And derive data in the output selector
  (filteredTodos) => filteredTodos.map((todo) => todo.id)
);
