import { FETCH_WEATHER , UPDATE_WEATHER_LOCATION, GET_APP_NAME} from './action-types'

export const getAppName = name => ({
  type: GET_APP_NAME,
  payload: { name }
})

export const fetchWeather = (today, country, date, list) =>  ({
    type: FETCH_WEATHER,
    payload: { today,  country , date, list }
});

export const updateWeatherLocation = (today, country, date, list) =>  ({
    type: UPDATE_WEATHER_LOCATION,
    payload: { today, country, date, list }
});