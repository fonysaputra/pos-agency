import { put } from 'redux-saga/effects'

export function* fetchNews(action) {
  const json = yield fetch(
    `https://jsonplaceholder.typicode.com/posts/${action.payload.id}`,
  ).then((response) => response.json())

  yield put({ type: 'NEWS_RECEIVED', json: json || [{ error: json.message }] })
}

export function* fetchPost() {
  const json = yield fetch(
    `https://jsonplaceholder.typicode.com/posts`,
  ).then((response) => response.json())

  yield put({ type: 'NEWS_POST', json: json || [{ error: json.message }] })
}
