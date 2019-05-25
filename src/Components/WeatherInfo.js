import React from 'react'

import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function WeatherInfo(props) {
  const classes = useStyles(); 
  const { celsius, city, country, date, status } = props

  return (
    <Card className={classes.card}>
      <CardContent className={classes.row}>

        <div className={classes.weatherCelsiusColumn}>
          <Typography className={classes.celsius}  align='left' variant='h1'>
            {celsius} °C
          </Typography>
        </div>

        <div className={classes.weatherInfo}>
          <Typography className={classes.country}  align='left' variant='h6'>
            {city}, {country}
          </Typography>
          <Typography className={classes.date}  align='left' variant='h6'>
            {date}
          </Typography>
          <Typography className={classes.status}  align='left' variant='h6'>
            {status}
          </Typography>
        </div>

      </CardContent>
    </Card>
  )
}

// set screen size limit
const screenSize = 'md';

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: '30px',
    width: '100%',
    [theme.breakpoints.up(screenSize)]: {
      width: '50%',
    }
  },
  row: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up(screenSize)]: {
      flexDirection: 'row',
    }
  },
  weatherCelsiusColumn: {
    marginRight: '5px',
    width: '100%',
    [theme.breakpoints.up(screenSize)]: {
      width: '50%'
    }
  },
  weatherInfo: {
    flexDirection: 'column',
    width: '100%',
    [theme.breakpoints.up(screenSize)]: {
      width: '50%'
    }
  },
  celsius : {
    fontWeight: '500',
  },
  country: {
    fontWeight: '700',
  },
  date: {
    fontWeight: '500',
  },
  status: {
    color: 'grey'
  }
  
}));
