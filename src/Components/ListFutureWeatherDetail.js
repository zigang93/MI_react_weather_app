import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

export default function ListFutureWeatherDetail(props) {

  const classes = useStyles();
  const { key ,date, status, min , max } = props

  return (
    <ListItem alignItems="flex-start" key={key}>

      <ListItemText
        primary={date}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {status}
            </Typography>
          </React.Fragment>
        }
      />
      <ListItemSecondaryAction>
        <Typography className={classes.celsius} >{min} °C - {max} °C</Typography>
      </ListItemSecondaryAction>

    </ListItem>

  )
}

const useStyles = makeStyles(() => ({

  inline: {
    display: 'inline',
  },
  celsius : {
    fontWeight: '500',
  },
}));
