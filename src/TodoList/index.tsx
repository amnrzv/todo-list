import React, { useState, FormEvent } from "react"
import { IconButton, Theme, Input, Box } from "@material-ui/core"
import AddIcon from "@material-ui/icons/AddCircle"

import { TodoListHeader } from "../TodoListHeader"
import { TodoListItem } from "../TodoListItem"

type TodoListItemType = {
  id: string
  text: string
  completed: boolean
}

export const TodoList: React.FC<{ theme: Theme }> = ({ theme }) => {
  const [todoList, setTodoList] = useState<TodoListItemType[]>([])
  const [inputText, setInputText] = useState<string>("")

  const renderTodoListItem = (item: TodoListItemType, index: number) => {
    const { id, text, completed } = item

    return (
      <TodoListItem
        theme={theme}
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
      <Box m={2}>
        <TodoListHeader />
      </Box>
      <ul data-testid="todoListItems">{todoList.map(renderTodoListItem)}</ul>
      <form onSubmit={(event: FormEvent) => AddTodo(event)}>
        <IconButton size="medium" color="primary" type="submit">
          <AddIcon />
        </IconButton>
        <Input
          data-testid="todoInput"
          placeholder="Add a to-do"
          value={inputText}
          onChange={event => setInputText(event.target.value)}
        />
      </form>
    </>
  )
}
