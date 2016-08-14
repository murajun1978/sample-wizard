import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import {reducer as form} from 'redux-form'

export default combineReducers({
  routing,
  form
})
