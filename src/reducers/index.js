import { combineReducers } from 'redux'
import setup from './setup'
import src from './src'

const todoApp = combineReducers({
  setup,
  src
})

export default todoApp
