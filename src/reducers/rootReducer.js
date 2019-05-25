import { combineReducers } from 'redux';

// import reducers list
import weatherReducer from './weatherReducer'

// in future if reducer a lot, we can combine into one 
export default combineReducers({
  weatherReducer,
})