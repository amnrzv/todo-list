import React from "react"
import { Typography, Box } from "@material-ui/core"

import "./style.scss"

export const TodoListHeader: React.FC = () => {
  return (
    <header className="headerContainer">
      <Box p={2}>
        <Typography variant="h3">Team To-Do List</Typography>
        <Typography variant="subtitle1">Wed 4 March</Typography>
      </Box>
    </header>
  )
}
