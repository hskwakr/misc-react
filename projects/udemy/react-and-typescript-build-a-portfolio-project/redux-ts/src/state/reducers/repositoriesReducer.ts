interface RepositoriesState {
  loading: boolean;
  data: string[];
  error: string | null;
}

const ActionType = {
  SEARCH: 'search_repositories',
  SEARCH_SUCCESS: 'search_repositories_success',
  SEARCH_ERROR: 'search_repositories_error',
} as const;

interface SearchRepositoriesAction {
  type: typeof ActionType.SEARCH;
}
interface SearchRepositoriesSuccessAction {
  type: typeof ActionType.SEARCH_SUCCESS;
  payload: RepositoriesState['data'];
}
interface SearchRepositoriesErrorAction {
  type: typeof ActionType.SEARCH_ERROR;
  payload: string;
}

type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;

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
