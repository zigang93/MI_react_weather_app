import React , { Component } from 'react';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container';

import Header from './Components/Header';
import WeatherInfo from './Components/WeatherInfo';
import ListFutureWeather from './Components/ListFutureWeather';

// API
import { getCurrentWeather, getNextFiveDayWeather } from './api/weather-api'
import { getCountryName } from './utils/getCountryName'
import { convertTimestamp } from './utils/convertTimestamp'

// Connect Redux
import { connect } from 'react-redux';
import { getAppName, fetchWeather , updateWeatherLocation} from './actions/weatherAction'

// Change Themes Color
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6FB2E2',
    },
  }
});

class App extends Component {

  async componentDidMount() {

    // Default setting
    const APP_NAME = 'Weather App'
    const DEFAULT_CITY = 'Kuala Lumpur'

    // api fetch json
    const today = await getCurrentWeather(DEFAULT_CITY);
    const nextFiveDay = await getNextFiveDayWeather(DEFAULT_CITY, 0)

    // format data
    const country = getCountryName(today.sys.country)
    const date = convertTimestamp(today.dt);
    const list = nextFiveDay.map((data, i) => {
        return {
          id: i,
          date: convertTimestamp(data.dt, 'list'),
          status: data.weather[0].main,
          min: Math.round(data.main.temp_min),
          max: Math.round(data.main.temp_max)
        }
    })

    const { fetchWeather, getAppName } = this.props
    // redux dispatch props
    fetchWeather(today, country, date, list);
    getAppName(APP_NAME);
  }

  // function handler
  async handleSearchLocation(e) {

    // if press enter
    if (e.key === 'Enter') {
      
      const CITY = e.target.value;
      const today = await getCurrentWeather(CITY);
      const nextFiveDay = await getNextFiveDayWeather(CITY, 0)

      if (today !== null && nextFiveDay !== null ) {
        // format data
        const country = getCountryName(today.sys.country)
        const date = convertTimestamp(today.dt);

        const list = nextFiveDay.map((data, i) => {
            return {
              id: i,
              date: convertTimestamp(data.dt, 'list'),
              status: data.weather[0].main,
              min: Math.round(data.main.temp_min),
              max: Math.round(data.main.temp_max)
            }
        })

        const { updateWeatherLocation } = this.props
        // redux dispatch props
        updateWeatherLocation(today, country, date, list);

      }

    }
  }

  render() {

    const { 
      appName, 
      city, 
      country, 
      timezone, 
      todayCelsius, 
      weatherStatus, 
      todayDate,
      list
    } = this.props

    return (
    <ThemeProvider theme={theme}>

      <Header 
        appName={appName} 
        location={city}
        onKeyPress={(e) => this.handleSearchLocation(e)}
      />

      <Container>

        <WeatherInfo 
          celsius={todayCelsius} 
          city={city}
          country={country}
          date={todayDate}
          timezone={timezone}
          status={weatherStatus}
        />

        <ListFutureWeather 
          fetchWeatherData={list}
        />

      </Container>
      
    </ThemeProvider>
    )
  }
}

// get state from redux
const mapStateToProps = state => ({
  appName: state.weatherReducer.appName,
  city: state.weatherReducer.city,
  country: state.weatherReducer.country,
  timezone: state.weatherReducer.timezone,
  weatherStatus: state.weatherReducer.weatherStatus,
  todayCelsius: state.weatherReducer.todayCelsius,
  todayDate: state.weatherReducer.todayDate,
  list: state.weatherReducer.list,
});

// send action
const mapDispatchToProps = dispatch => ({
    getAppName: name => dispatch(getAppName(name)), 
    fetchWeather: (today, country, date, list) => dispatch(fetchWeather(today, country, date, list)),
    updateWeatherLocation: (today, country, date, list) => dispatch(updateWeatherLocation(today, country, date, list)),
    
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
