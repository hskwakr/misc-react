import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { Cell } from '../cell';
import {
  DeleteCell,
  InsertCellBefore,
  MoveCell,
  UpdateCell,
} from '../action-payloads';

interface CellsState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: Record<string, Cell>;
}

const initialState: CellsState = {
  loading: false,
  error: null,
  order: [],
  data: {},
};

const randomId = () => Math.random().toString(36).substring(2, 5);

const filterData = (id: string, list: CellsState['data']) => {
  const filtered: typeof list = {};
  Object.keys(list).forEach((k) => {
    if (k !== id) {
      filtered[k] = list[k];
    }
  });

  return filtered;
};

const cellsSlice = createSlice({
  name: 'cells',
  initialState,
  reducers: {
    deleteCell: {
      reducer: (state, action: PayloadAction<DeleteCell>) => {
        const { id } = action.payload;

        // Remove from data
        state.data = filterData(id, state.data);

        // Remove from order
        state.order = state.order.filter((idx) => idx !== id);
      },
      prepare: (id: DeleteCell['id']) => ({
        payload: { id },
      }),
    },

    moveCell: {
      reducer: (state, action: PayloadAction<MoveCell>) => {
        const { id, direction } = action.payload;
        const index = state.order.findIndex((o) => o === id);

        const targetIndex = direction === 'up' ? index - 1 : index + 1;
        if (targetIndex < 0 || targetIndex > state.order.length - 1) return;

        // Swap
        state.order[index] = state.order[targetIndex];
        state.order[targetIndex] = id;
      },
      prepare: (id: MoveCell['id'], direction: MoveCell['direction']) => ({
        payload: { id, direction },
      }),
    },

    updateCell: {
      reducer: (state, action: PayloadAction<UpdateCell>) => {
        const { id, content } = action.payload;
        const cell = state.data[id];
        if (cell == null) return;

        cell.content = content;
      },
      prepare: (id: UpdateCell['id'], content: UpdateCell['content']) => ({
        payload: { id, content },
      }),
    },

    insertCellBefore: {
      reducer: (state, action: PayloadAction<InsertCellBefore>) => {
        const { id, type } = action.payload;
        const cell: Cell = {
          content: '',
          type,
          id: randomId(),
        };

        // Add to data
        state.data[cell.id] = cell;

        // Add to order
        const index = state.order.findIndex((o) => o === id);
        if (index === -1) {
          state.order.push(cell.id);
        } else {
          state.order.splice(index, 0, cell.id);
        }
      },
      prepare: (
        id: InsertCellBefore['id'],
        type: InsertCellBefore['type']
      ) => ({
        payload: { id, type },
      }),
    },
  },
});

export default cellsSlice.reducer;

export const { deleteCell, moveCell, updateCell, insertCellBefore } =
  cellsSlice.actions;
