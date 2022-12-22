import ActionType from '../action-types';
import RepositoriesState from '../RepositoriesState';

interface SearchRepositoriesAction {
  type: ActionType.SEARCH;
}
interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_SUCCESS;
  payload: RepositoriesState['data'];
}
interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
