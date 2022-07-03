import React from 'react';
import { List, ListItemText, ListItem } from '@material-ui/core';
import TypoGraphy from '@material-ui/core/Typography';
import {
  Home,
  LibraryBooks,
  NoMeetingRoom,
  MeetingRoom
} from '@material-ui/icons';

function NavBar(props) {
  return (
    <List component="nav">
      <ListItem component="div">
        <ListItemText inset>
          <TypoGraphy color="inherit">
            Home <Home />
          </TypoGraphy>
        </ListItemText>
        <ListItemText inset>
          <TypoGraphy color="inherit">
            Posts <LibraryBooks />
          </TypoGraphy>
        </ListItemText>
        <ListItemText inset>
          <TypoGraphy color="inherit">
            Chat <MeetingRoom />
          </TypoGraphy>
        </ListItemText>
        <ListItemText inset>
          <TypoGraphy color="inherit">
            Logout <NoMeetingRoom />
          </TypoGraphy>
        </ListItemText>
      </ListItem>
    </List>
  );
}

export default NavBar;
