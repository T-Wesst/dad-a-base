import React from 'react';
import { Container, Typography, Link } from '@material-ui/core';

export default function Footer() {
  return (
    <footer>
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '} Dad-A-Base {new Date().getFullYear()}{' '}
          {'. Built with '}
          <Link color="inherit" href="https://material-ui.com/">
            Material-UI.
          </Link>
        </Typography>
      </Container>
    </footer>
  );
}
