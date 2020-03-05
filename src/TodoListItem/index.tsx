import React, { useState } from "react"
import cx from "classnames"
import "./style.scss"

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
      <div className="content">
        <input
          type="checkbox"
          id={id}
          checked={completed}
          onChange={toggleComplete}
        />
        <label htmlFor={id} className={cx("textLabel", { completed })}>
          {text}
        </label>
      </div>
      {showDeleteBtn && <button onClick={deleteTodo}>🗑</button>}
    </li>
  )
}
