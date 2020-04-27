import { put } from 'redux-saga/effects'

export function* fetchBarang(action) {
//   const json = yield fetch(
//     `https://jsonplaceholder.typicode.com/posts/${action.payload.id}`,
//   ).then((response) => response.json())

  yield put({ type: 'NEWS_HOME', json: "json", page:action.payload.page })
}
