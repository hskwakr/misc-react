import { createAction, createReducer } from '@reduxjs/toolkit';
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

const statusChanged = createAction<Status>('filters/statusFilterChanged');
const colorChanged = createAction<{
  color: Color;
  changeType: 'added' | 'removed';
}>('filters/colorFilterChanged');

const filterReducer = createReducer(initialState, (builder) => {
  builder.addCase(statusChanged, (state, action) => {
    return {
      ...state,
      status: action.payload,
    };
  });

  builder.addCase(colorChanged, (state, action) => {
    let { color, changeType } = action.payload;
    const { colors } = state;

    switch (changeType) {
      case 'added': {
        if (colors.includes(color)) {
          return state;
        }

        return {
          ...state,
          colors: state.colors.concat(color),
        };
      }

      case 'removed': {
        return {
          ...state,
          colors: state.colors.filter((c) => c !== color),
        };
      }

      default:
        return state;
    }
  });
});

export default filterReducer;
