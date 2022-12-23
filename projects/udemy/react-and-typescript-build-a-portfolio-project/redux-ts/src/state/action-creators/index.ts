import axios from 'axios';
import { Dispatch } from 'redux';
import ActionType from '../action-types';
import { Action } from '../actions';

interface Response {
  objects: Array<{
    package: { name: string };
  }>;
}

const url = 'https://registry.npmjs.org/-/v1/search';

const searchRepositories =
  (term: string) => async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SEARCH });

    try {
      const { data } = await axios.get<Response>(url, {
        params: {
          text: term,
        },
      });

      const names = data.objects.map((result) => result.package.name);

      dispatch({
        type: ActionType.SEARCH_SUCCESS,
        payload: names,
      });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_ERROR,
          payload: error.message,
        });
      }
    }
  };

export default searchRepositories;
