import { createSlice } from '@reduxjs/toolkit';
import { Cell } from '../cell';

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

const cellsSlice = createSlice({
  name: 'cells',
  initialState,
  reducers: {},
});

export default cellsSlice.reducer;
