import React, { useState } from "react"
import cx from "classnames"
import { Checkbox, Box, IconButton, Theme, Typography } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"

import "./style.scss"

type TodoListItemProps = {
  theme: Theme
  id: string
  text: string
  completed: boolean
  toggleComplete: () => void
  deleteTodo: () => void
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  theme,
  text,
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
        <Checkbox size="medium" checked={completed} onChange={toggleComplete} />
        <Box textAlign="left" className={cx({ completed })}>
          <Typography variant="body1">{text}</Typography>
        </Box>
      </label>
      {showDeleteBtn && (
        <IconButton
          data-testid="deleteBtn"
          onClick={deleteTodo}
          color="primary"
        >
          <DeleteIcon />
        </IconButton>
      )}
    </li>
  )
}
