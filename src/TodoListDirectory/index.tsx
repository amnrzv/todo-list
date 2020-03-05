import React from "react"
import {
  Avatar,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core"
import ListIcon from "@material-ui/icons/List"

import "./style.scss"

export const TodoListDirectory: React.FC = () => {
  return (
    <Box m={1} flex={1}>
      <section className="directoryContainer">
        <header className="directoryHeader">
          <Avatar
            data-testid="avatar"
            src="https://images.unsplash.com/photo-1522609925277-66fea332c575"
          />
          <Typography
            data-testid="userName"
            className="userName"
            variant="body1"
          >
            Amaan Rizvi
          </Typography>
        </header>
        <List
          data-testid="navList"
          component="nav"
          className="directoryListing"
        >
          <ListItem button>
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="Team To-Do List" />
          </ListItem>
        </List>
      </section>
    </Box>
  )
}
