import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form' // rename reducer as formReducer
import authReducer from './authReducer'
import streamReducer from './streamReducer'

export default combineReducers({
  auth: authReducer,
  form: formReducer, // connect redux form to my reducer
  streams: streamReducer
})
