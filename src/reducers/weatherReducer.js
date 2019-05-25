import { FETCH_WEATHER , UPDATE_WEATHER_LOCATION, GET_APP_NAME } from '../actions/action-types'

const initialState = {
  appName: '',
  city: '',
  country: '',
  timezone: '',
  weatherStatus: '',
  todayCelsius: 0,
  todayDate: '',
  list: [],
}

export default function weatherReducer(state = initialState, action) {
  //start logic
  switch(action.type) {
    case GET_APP_NAME: 
      return {
        ...state,
        appName: action.payload.name
      }
    case FETCH_WEATHER:
      
      return {
        ...state,
        city: action.payload.today.name,
        country: action.payload.country,
        todayCelsius: Math.round(action.payload.today.main.temp),
        weatherStatus: action.payload.today.weather[0].main,
        todayDate: action.payload.date,
        list: action.payload.list,
      }
    case UPDATE_WEATHER_LOCATION:
      return {
        ...state,
        city: action.payload.today.name,
        country: action.payload.country,
        todayCelsius: Math.round(action.payload.today.main.temp),
        weatherStatus: action.payload.today.weather[0].main,
        todayDate: action.payload.date,
        list: action.payload.list,
      }
    default: 
      return state;
  }

}