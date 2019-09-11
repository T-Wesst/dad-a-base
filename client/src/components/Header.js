import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import NavBar from './NavBar';
import { Cloud } from '@material-ui/icons';

export default function Header(props) {
  return (
    <div>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            <Cloud /> Dad-A-Base
          </Typography>
          <NavBar />
        </Toolbar>
      </AppBar>
    </div>
  );
}
