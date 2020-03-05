import React, { useState, FormEvent } from "react"
import { TextField, Fab } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"

import { TodoListHeader } from "../TodoListHeader"
import { TodoListItem } from "../TodoListItem"

type TodoListItemType = {
  id: string
  text: string
  completed: boolean
}

export const TodoList: React.FC = () => {
  const [todoList, setTodoList] = useState<TodoListItemType[]>([])
  const [inputText, setInputText] = useState<string>("")

  // console.table(todoList)

  const renderTodoListItem = (item: TodoListItemType, index: number) => {
    const { id, text, completed } = item

    return (
      <TodoListItem
        key={index}
        id={item.id}
        text={item.text}
        completed={item.completed}
        deleteTodo={() => {
          setTodoList([
            ...todoList.slice(0, index),
            ...todoList.slice(index + 1)
          ])
        }}
        toggleComplete={() => {
          setTodoList([
            ...todoList.slice(0, index),
            { id, text, completed: !completed },
            ...todoList.slice(index + 1)
          ])
        }}
      />
    )
  }

  const AddTodo = (event: FormEvent) => {
    event.preventDefault()
    setTodoList([
      ...todoList,
      {
        id: todoList.length.toString(),
        text: inputText,
        completed: false
      }
    ])
    setInputText("")
  }

  return (
    <>
      <TodoListHeader />
      <ul data-testid="todoListItems">{todoList.map(renderTodoListItem)}</ul>
      <form onSubmit={(event: FormEvent) => AddTodo(event)}>
        <Fab size="small" color="primary" type="submit">
          <AddIcon />
        </Fab>
        <TextField
          data-testid="todoInput"
          id="standard-basic"
          label="Add a to-do"
          value={inputText}
          onChange={event => setInputText(event.target.value)}
        />
      </form>
    </>
  )
}
