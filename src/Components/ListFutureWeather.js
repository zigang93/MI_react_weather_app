import React from 'react'
import { makeStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListFutureWeatherDetail from './ListFutureWeatherDetail';

export default function ListFutureWeather() {

  const classes = useStyles();

  const fetchWeatherDate = [
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

  return (
    <List className={classes.root}>
      
        
        {
          fetchWeatherDate.map((list) => {
            return (
              <React.Fragment>  
                <div className={classes.conatainer}>
                <ListFutureWeatherDetail 
                  key={list.id}
                  date={list.date}
                  status={list.status}
                  from={list.from}
                  to={list.to}
                />
                </div>
                <Divider component="li" />
              </React.Fragment>  
            )
          })
        }
      
    </List>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '10px',
    backgroundColor: theme.palette.background.paper,
  },
  conatainer: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50%'
    }
  }
}));
