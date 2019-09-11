import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import NavBar from './NavBar';

export default function Header(props) {
  return (
    <div>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Dad-A-Base
          </Typography>
          <NavBar />
        </Toolbar>
      </AppBar>
    </div>
  );
}
