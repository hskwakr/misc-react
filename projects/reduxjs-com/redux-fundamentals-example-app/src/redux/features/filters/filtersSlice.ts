import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Color } from '../../../color';

export const StatusFilters = {
  All: 'all',
  Active: 'active',
  Completed: 'completed',
} as const;

export type Status = typeof StatusFilters[keyof typeof StatusFilters];

interface FilterState {
  status: Status;
  colors: Color[];
}

const initialState: FilterState = {
  status: StatusFilters.All,
  colors: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    statusFilterChanged: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },

    colorFilterChanged: {
      reducer(
        state,
        action: PayloadAction<{
          color: Color;
          changeType: 'added' | 'removed';
        }>
      ) {
        const { color, changeType } = action.payload;
        const { colors } = state;

        switch (changeType) {
          case 'added': {
            if (colors.includes(color)) {
              break;
            }

            state.colors.push(color);
            break;
          }

          case 'removed': {
            state.colors = colors.filter((c) => c !== color);
            break;
          }

          default:
            break;
        }
      },
      prepare(color, changeType) {
        return {
          payload: { color, changeType },
        };
      },
    },
  },
});

export default filtersSlice.reducer;

export const { statusFilterChanged, colorFilterChanged } = filtersSlice.actions;
