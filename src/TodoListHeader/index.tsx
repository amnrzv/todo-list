import React from "react"
import { Typography } from "@material-ui/core"

export const TodoListHeader: React.FC = () => {
  return (
    <>
      <Typography variant="h3">Team To-Do List</Typography>
      <Typography variant="subtitle1">Wed 4 March</Typography>
    </>
  )
}
