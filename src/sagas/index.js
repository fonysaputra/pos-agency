import { takeEvery, all } from 'redux-saga/effects'

import { fetchNews, fetchPost } from './post'

import { fetchHome} from "./home"
import {fetchBarang} from "./barang"

function* actionWatcher() {
  yield takeEvery('GET_NEWS', fetchNews)
  yield takeEvery('GET_POST', fetchPost)
  yield takeEvery('GET_BARANG', fetchBarang)
  yield takeEvery('GET_HOME', fetchHome)
}

export default function* rootSaga() {
  yield all([actionWatcher()])
}
