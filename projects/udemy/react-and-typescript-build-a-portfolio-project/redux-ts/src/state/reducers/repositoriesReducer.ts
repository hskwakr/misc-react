import ActionType from '../action-types';
import { Action } from '../actions';
import RepositoriesState from '../RepositoriesState';

const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH:
      return { loading: true, error: null, data: [] };

    case ActionType.SEARCH_SUCCESS:
      return { loading: false, error: null, data: action.payload };

    case ActionType.SEARCH_ERROR:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default reducer;
