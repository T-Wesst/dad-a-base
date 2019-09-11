import React from 'react';
import {
  Button,
  TextField,
  Link,
  Grid,
  Typography,
  Container
} from '@material-ui/core';

export default function Register(props) {
  const { handleSubmit, handleChange } = props;

  return (
    <Container component="main" maxWidth="xs">
      <div className="flex-col flex-center">
        <img
          src="https://www.freepngimg.com/thumb/database/3-2-database-free-download-png-thumb.png"
          style={{ height: '20px', width: '20px' }}
          alt="dad"
        />
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className="full-width theme-mtx3" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                onChange={handleChange}
                label="Username"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="email"
                id="email"
                label="Email Address"
                name="email"
                onChange={handleChange}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handleChange}
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="theme-mt"
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end" className="theme-mt">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
