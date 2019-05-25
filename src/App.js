import React from 'react';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container';

import Header from './Components/Header';
import WeatherInfo from './Components/WeatherInfo';
import ListFutureWeather from './Components/ListFutureWeather';

// Change Themes Color
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6FB2E2',
    },
  }
});

// Fetch Data
const data = [
  {
    id: 0,
    date: '11 Jan 2017, Wednesday',
    status: 'Thunderstorm',
    from: 30,
    to: 32
  },
  {
    id: 1,
    date: '12 Jan 2017, Thursday',
    status: 'Rain',
    from: 28,
    to: 29
  },
  {
    id: 2,
    date: '13 Jan 2017, Friday',
    status: 'Sun',
    from: 29,
    to: 34
  }
]

function App() {
  return (
    <ThemeProvider theme={theme}>

      <Header 
        appName='Weather App' 
        location='Penang'
      />

      <Container>

        <WeatherInfo 
          celsius='32' 
          city='Penang'
          country='Malaysia'
          date='Wed, 11 Jan 2017 1:00pm KUL'
          status='Thunderstorm'
        />

        <ListFutureWeather 
          fetchWeatherData={data}
        />

      </Container>
      
    </ThemeProvider>
  );
}

export default App;
