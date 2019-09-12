import React from 'react';
import Login from './Login';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    marginBottom: '-36px',
    marginTop: '-12vh'
  },

  image: {
    backgroundImage:
      'url(https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },

  logo: {
    top: '0',
    left: '0',
    right: '0',
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    padding: '24px 24px 72px'
  },

  name: {
    fontSize: '30px',
    color: '#1d1d1d'
  },

  slogan: {
    fontSize: '16px',
    color: '#3d3d3d'
  },

  paper: {
    marginTop: '200px',
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Landing(props) {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <Grid item sm={4} md={7} className={classes.image}>
        <Grid item className={classes.logo}>
          <div style={{ marginTop: '200px' }}>
            <img
              src="https://www.freepngimg.com/thumb/database/3-2-database-free-download-png-thumb.png"
              style={{ height: '20px', width: '20px' }}
              alt="dad"
            />
            <span className={classes.name}>Dad-A-Base</span>
            <p className={classes.slogan}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo omnis facilis fuga ducimus voluptates animi labore
              necessitatibus distinctio iure doloribus nam blanditiis recusandae
              officiis eius, accusamus sequi, dolorem cupiditate eligendi!
            </p>
          </div>
        </Grid>
      </Grid>
      <Grid item sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img
            src="https://www.freepngimg.com/thumb/database/3-2-database-free-download-png-thumb.png"
            xs={12}
            alt=""
            style={{ height: '20px', width: '20px' }}
          />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Login {...props} />
        </div>
      </Grid>
    </Grid>
  );
}
