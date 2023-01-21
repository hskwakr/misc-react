import { PayloadAction } from '@reduxjs/toolkit';
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

export default function filterReducer(
  state = initialState,
  action: PayloadAction<any>
) {
  switch (action.type) {
    case 'filters/statusFilterChanged': {
      return {
        ...state,
        status: action.payload,
      };
    }

    case 'filters/colorFilterChanged': {
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
    }

    default:
      return state;
  }
}
