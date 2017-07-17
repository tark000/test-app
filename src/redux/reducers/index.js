import { combineReducers } from 'redux'
import shops from './shops'
import user from './user'

export default combineReducers({
  shops,
  user
})