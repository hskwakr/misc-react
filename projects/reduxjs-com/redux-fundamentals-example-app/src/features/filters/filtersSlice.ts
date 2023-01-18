import { PayloadAction } from '@reduxjs/toolkit';
import { Color } from '../Color';

interface FilterState {
  status: 'All' | 'Active' | 'Completed';
  colors: Color[];
}

const initialState: FilterState = {
  status: 'All',
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
