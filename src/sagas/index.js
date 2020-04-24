import { takeEvery, all } from 'redux-saga/effects'

import { fetchNews, fetchPost } from './post'

function* actionWatcher() {
  yield takeEvery('GET_NEWS', fetchNews)
  yield takeEvery('GET_POST', fetchPost)
}

export default function* rootSaga() {
  yield all([actionWatcher()])
}
