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

// Change Themes Color
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6FB2E2',
    },
  }
});

export default class App extends Component {

  state = {
    appName: '',
    city: '',
    country: '',
    timezone: '',
    weatherStatus: '',
    todayCelsius: 0,
    todayDate: '',
    list: []
  }

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

    // setState when first render
    this.setState({
      // copy state
      ...this.state,
      appName: APP_NAME,
      city: today.name,
      country: country,
      todayCelsius: Math.round(today.main.temp),
      weatherStatus: today.weather[0].main,
      todayDate: date,
      list
    })
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

        // setState to latest info
        this.setState({
          // copy state
          ...this.state,
          city: today.name,
          country: country,
          todayCelsius: Math.round(today.main.temp),
          weatherStatus: today.weather[0].main,
          todayDate: date,
          list
        })
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
    } = this.state

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

