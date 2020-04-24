import { combineReducers } from 'redux'
import { responsePost, responseNews } from './post.js'

const rootReducers = combineReducers({
  responsePost,
  responseNews,
})

export default rootReducers
