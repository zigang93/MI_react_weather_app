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

        <ListFutureWeather />

      </Container>
      
    </ThemeProvider>
  );
}

export default App;
