import React from "react"
import "./style.css"

type TodoListItemProps = {
  id: string
  text: string
  completed: boolean
  toggleComplete: () => void
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  text,
  id,
  completed,
  toggleComplete
}) => {
  return (
    <li className="container">
      <input type="checkbox" id={id} onChange={toggleComplete} />
      <label htmlFor={id} className={completed ? "completed" : undefined}>
        {text}
      </label>
    </li>
  )
}
