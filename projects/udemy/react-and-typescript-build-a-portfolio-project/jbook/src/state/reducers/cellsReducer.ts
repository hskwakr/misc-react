import { createSlice } from '@reduxjs/toolkit';
import { createEntityAdapter } from '@reduxjs/toolkit/dist/entities/create_adapter';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { Cell } from '../cell';
import {
  InsertCellBefore,
  MoveCell,
  UpdateCell,
} from '../action-payloads';

interface CellsState {
  loading: boolean;
  error: string | null;
  order: string[];
}

const cellsAdapter = createEntityAdapter<Cell>();

const initialState = cellsAdapter.getInitialState<CellsState>({
  loading: false,
  error: null,
  order: [],
});

const cellsSlice = createSlice({
  name: 'cells',
  initialState,
  reducers: {
    deleteCell: cellsAdapter.removeOne,

    moveCell: {
      reducer: (state, action: PayloadAction<MoveCell>) => {
        console.log(state, action);
      },
      prepare: (
        id: MoveCell['id'],
        direction: MoveCell['direction']
      ) => ({
        payload: { id, direction },
      }),
    },

    updateCell: {
      reducer: (state, action: PayloadAction<UpdateCell>) => {
        console.log(state, action);
      },
      prepare: (
        id: UpdateCell['id'],
        content: UpdateCell['content']
      ) => ({
        payload: { id, content },
      }),
    },

    insertCellBefore: {
      reducer: (state, action: PayloadAction<InsertCellBefore>) => {
        console.log(state, action);
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
