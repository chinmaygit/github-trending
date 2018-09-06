import { fromJS } from 'immutable';

import {
  CHANGE_LANGUAGE,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  language: '',
  repositories: [],
  loading: false,
  error: '',
});

/**
 * Home Reducer.
 *
 * @param {*} [state=initialState]
 * @param {*} action
 * @returns
 */
function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      // Delete prefixed '@' from the github username
      return state.set('language', action.language);

    case LOAD_REPOS_SUCCESS:
      // Delete prefixed '@' from the github username

      return state
        .set('loading', false)
        .set('error', '')
        .set('repositories', action.repos);
    case LOAD_REPOS:
      return state.set('error', '').set('loading', true);

    case LOAD_REPOS_ERROR:
      return state.set('error', action.error).set('loading', false);

    default:
      return state;
  }
}

export default homeReducer;
