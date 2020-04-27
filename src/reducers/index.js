import { combineReducers } from 'redux'
import { responsePost, responseNews } from './post.js'
import {responseBarang} from "./barang"
import {responseHome} from "./home"

const rootReducers = combineReducers({
  responsePost,
  responseNews,
  responseBarang,
  responseHome
})

export default rootReducers
