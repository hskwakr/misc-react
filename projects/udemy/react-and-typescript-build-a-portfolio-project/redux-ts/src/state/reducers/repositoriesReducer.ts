import ActionType from '../action-types';
import { Action } from '../actions';
import RepositoriesState from '../RepositoriesState';

const initialState: RepositoriesState = {
  loading: false,
  error: null,
  data: [],
};

const initialAction: Action = {
  type: ActionType.SEARCH,
};

const reducer = (
  state: RepositoriesState = initialState,
  action: Action = initialAction
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

const repositoriesReducer = reducer;
export default repositoriesReducer;
