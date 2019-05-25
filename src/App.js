import React from 'react';
import Header from './Components/Header';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

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
      Weather App
    </ThemeProvider>
  );
}

export default App;
