import React from 'react';
import { List, ListItemText, ListItem } from '@material-ui/core';
import TypoGraphy from '@material-ui/core/Typography';
import { Home, LibraryBooks, NoMeetingRoom, MeetingRoom } from '@material-ui/icons';

function NavBar(props) {
  return (
    <List component="nav">
      <ListItem component="div">
        <ListItemText inset>
          <TypoGraphy color="inherit" variant="title">
            Home <Home />
          </TypoGraphy>
        </ListItemText>
        <ListItemText inset>
          <TypoGraphy color="inherit" variant="title">
            Posts <LibraryBooks />
          </TypoGraphy>
        </ListItemText>
        <ListItemText inset>
          <TypoGraphy color="inherit" variant="title">
            Chat <MeetingRoom />
          </TypoGraphy>
        </ListItemText>
        <ListItemText inset>
          <TypoGraphy color="inherit" variant="title">
            Logout <NoMeetingRoom />
          </TypoGraphy>
        </ListItemText>
      </ListItem>
    </List>
  );
}

export default NavBar;
