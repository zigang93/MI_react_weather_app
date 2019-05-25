import React from 'react'
import { makeStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListFutureWeatherDetail from './ListFutureWeatherDetail';

export default function ListFutureWeather(props) {

  const classes = useStyles();
  const { fetchWeatherData } = props;

  return (
    <List className={classes.root}>
      
        {
          fetchWeatherData.map((list) => {
            return (
              <React.Fragment key={list.id}>  
                <div className={classes.conatainer}>
                <ListFutureWeatherDetail 
                  date={list.date}
                  status={list.status}
                  min={list.min}
                  max={list.max}
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
