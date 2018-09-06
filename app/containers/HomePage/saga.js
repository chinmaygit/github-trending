import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from '../../utils/request';
import { reposLoaded, repoLoadingError } from './actions';
import { makeSelectLanguage } from './selector';
import { LOAD_REPOS } from './constants';

export function* getRepos() {
  // Select language from store
  let language = yield select(makeSelectLanguage());

  if (language === undefined) {
    language = '';
  }
  const requestURL = `https://github-trending-api.now.sh/repositories?language=${language}&since=weekly`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    console.log('Repos', repos, requestURL);
    if (repos) {
      if (repos.length > 0) {
        yield put(reposLoaded(repos, language));
      } else {
        yield put(repoLoadingError('Err... Repos not found.'));
      }
    } else {
      yield put(
        repoLoadingError('Err... Repositories went to play blue whale.'),
      );
    }
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  yield takeLatest(LOAD_REPOS, getRepos);
}
