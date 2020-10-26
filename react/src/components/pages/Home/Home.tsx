import clsx from 'clsx';
import React from 'react';

import './Home.scss';

import {
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography
} from '@material-ui/core';
import { Edit as EditIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: '15px',
    paddingBottom: '15px'
  },
  chip: {
    position: 'absolute',
    height: '20px',
    top: '16px',
    right: '16px',
    '& > .MuiChip-deleteIcon': {
      height: '16px'
    }
  },
  typography: {
    '& > span': {
      color: theme.palette.success.main,
      fontWeight: 'bold'
    },
    '& .MuiTypography-subtitle1': {
      color: theme.palette.divider
    }
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Container
      className={clsx('lesswhite-bg', classes.container)}
      maxWidth={false}
    >
      <Grid container>
        <Grid item>
          <Card elevation={1}>
            <CardContent>
              <Typography>Followers</Typography>
              <Typography>+5</Typography>
              <Typography className={classes.typography} variant="subtitle1">
                <span>+54%</span> Since last week
              </Typography>
              <Chip
                label="Today"
                onClick={() => {}}
                onDelete={() => {}}
                deleteIcon={<EditIcon />}
                className={classes.chip}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
