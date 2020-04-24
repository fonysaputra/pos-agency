import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import rootReducers from '../reducers/index'
import rootSaga from '../sagas/index'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducers, applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(rootSaga)

export default store
