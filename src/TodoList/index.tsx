import React, { useState, FormEvent } from "react"
import { TodoListHeader } from "../TodoListHeader"
import { TodoListItem } from "../TodoListItem"

type TodoListItemType = {
  id: string
  text: string
  completed: boolean
}

export type TodoListItemsType = {}

export const TodoList: React.FC<TodoListItemsType> = () => {
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
        <button type="submit">+ Add a to-do</button>
        <input
          data-testid="todoInput"
          type="text"
          value={inputText}
          onChange={event => setInputText(event.target.value)}
        />
      </form>
    </>
  )
}
