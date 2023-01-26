import {
  PayloadAction,
  createEntityAdapter,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { Color } from '../../../color';
import { RootState } from '../../store';
import { StatusFilters } from '../filters/filtersSlice';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  color?: Color;
}

const todosAdapter = createEntityAdapter<Todo>();

const initialState = todosAdapter.getInitialState;

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded: todosAdapter.addOne,

    todoDeleted: todosAdapter.removeOne,

    todoToggled: (state, action: PayloadAction<number>) => {
      const todoId = action.payload;
      const todo = state.entities[todoId];
      todo!.completed = !todo!.completed;
    },

    todoColorSelected: {
      reducer(state, action: PayloadAction<{ todoId: number; color: Color }>) {
        const { color, todoId } = action.payload;
        const todo = state.entities[todoId];
        todo!.color = color;
      },
      prepare(todoId, color) {
        return {
          payload: { todoId, color },
        };
      },
    },

    todoAllCompleted: (state) => {
      Object.values(state.entities).forEach((todo) => {
        todo!.completed = true;
      });
    },

    todoCompletedCleared: (state) => {
      const completeIds = Object.values(state.entities)
        .filter((todo) => todo!.completed)
        .map((todo) => todo!.id) as number[];

      todosAdapter.removeMany(state, completeIds);
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

export const { selectAll: selectTodos, selectById: selectTodoById } =
  todosAdapter.getSelectors<RootState>((state) => state.todos);

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
