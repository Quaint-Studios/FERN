import React from 'react';
import clsx from 'clsx';

import SyncIcon from '@material-ui/icons/Sync';
import EditIcon from '@material-ui/icons/Edit';

import {
  Grid,
  Container,
  Paper,
  makeStyles,
  Typography,
  Button
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '40px',
    height: 'calc(100vh - 64px)',
    backgroundColor: theme.palette.background.default
  },
  date: {
    marginLeft: theme.spacing(1)
  },
  button: {
    minWidth: 0,
    padding: 4,
    '& + *': {
      marginLeft: theme.spacing(1)
    }
  },
  buttonText: {
    backgroundColor: '#2196f3',
    textTransform: 'none',
    padding: '4px 10px'
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2} justify="space-between">
        <Grid item>
          <Typography variant="h5" display="inline">
            Welcome back, Elaine!
          </Typography>
          <Typography variant="body2" display="inline" className={classes.date}>
            {new Date().toLocaleString('en-GB', dateOptions)}
          </Typography>
        </Grid>
        <Grid item>
          <Button className={classes.button}>
            <SyncIcon />
          </Button>
          <Button className={classes.button}>
            <EditIcon />
          </Button>
          <Button
            size="small"
            className={clsx(classes.button, classes.buttonText)}
            variant="contained"
            disableElevation
            color="secondary"
          >
            Last 7 days
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
