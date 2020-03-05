import React, { useState } from "react"
import cx from "classnames"
import {
  Checkbox,
  Box,
  IconButton,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core"
import { purple, green } from "@material-ui/core/colors"
import DeleteIcon from "@material-ui/icons/Delete"

import "./style.scss"

type TodoListItemProps = {
  id: string
  text: string
  completed: boolean
  toggleComplete: () => void
  deleteTodo: () => void
}

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: green[600]
    }
  }
})

export const TodoListItem: React.FC<TodoListItemProps> = ({
  text,
  id,
  completed,
  toggleComplete,
  deleteTodo
}) => {
  const [showDeleteBtn, setShowDeleteBtn] = useState(false)

  return (
    <li
      className="container"
      onMouseOver={() => setShowDeleteBtn(true)}
      onMouseLeave={() => setShowDeleteBtn(false)}
    >
      <label className="content">
        <ThemeProvider theme={theme}>
          <Checkbox
            size="medium"
            checked={completed}
            onChange={toggleComplete}
          />
        </ThemeProvider>
        <Box textAlign="left" className={cx({ completed })}>
          {text}
        </Box>
      </label>
      {showDeleteBtn && (
        <IconButton data-testid="deleteBtn" onClick={deleteTodo}>
          <DeleteIcon />
        </IconButton>
      )}
    </li>
  )
}
