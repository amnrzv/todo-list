import React, { useState } from "react"
import "./style.css"

type TodoListItemProps = {
  id: string
  text: string
  completed: boolean
  toggleComplete: () => void
  deleteTodo: () => void
}

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
      <input
        type="checkbox"
        id={id}
        checked={completed}
        onChange={toggleComplete}
      />
      <label htmlFor={id} className={completed ? "completed" : undefined}>
        {text}
      </label>
      {showDeleteBtn && <button onClick={deleteTodo}>🗑</button>}
    </li>
  )
}
