import React from "react"
import { render, fireEvent } from "@testing-library/react"

import { TodoList } from "."

describe("Todo List", () => {
  it("Adds an item to the todo list by inputting in the field and pressing the button", () => {
    const mockText = "[dummy text]"
    const { getByTestId, getByText } = render(<TodoList />)

    const todoListItems = getByTestId("todoListItems")
    const todoInputField = getByTestId("todoInput")
    todoInputField.focus()
    fireEvent.input(todoInputField, { target: { value: mockText } })
    fireEvent.submit(getByText("+ Add a to-do"))

    expect(todoListItems.childNodes[0]).toHaveTextContent(mockText)
  })

  it("Adds an item to the todo list by inputting in the field and submitting the form", () => {
    const mockText = "[dummy text]"
    const { container, getByTestId } = render(<TodoList />)

    const todoListItems = getByTestId("todoListItems")
    const todoInputField = getByTestId("todoInput")
    const form = container.querySelector("form") as HTMLFormElement

    todoInputField.focus()
    fireEvent.input(todoInputField, { target: { value: mockText } })
    fireEvent.submit(form)

    expect(todoListItems.childNodes[0]).toHaveTextContent(mockText)
  })

  it("Adds multiple items to the todo list", () => {
    const mockText = "[dummy text]"
    const { container, getByTestId } = render(<TodoList />)

    const todoListItems = getByTestId("todoListItems")
    const todoInputField = getByTestId("todoInput")
    const form = container.querySelector("form") as HTMLFormElement

    todoInputField.focus()
    fireEvent.input(todoInputField, { target: { value: mockText } })
    fireEvent.submit(form)

    fireEvent.input(todoInputField, { target: { value: mockText } })
    fireEvent.submit(form)

    expect(todoListItems.childNodes.length).toBe(2)
  })

  it("Add a todo and mark it as complete by tapping on the text", () => {
    const mockText = "[dummy text]"
    const { container, getByTestId, getByText } = render(<TodoList />)

    const todoInputField = getByTestId("todoInput")
    const form = container.querySelector("form") as HTMLFormElement

    todoInputField.focus()
    fireEvent.input(todoInputField, { target: { value: mockText } })
    fireEvent.submit(form)

    fireEvent.click(getByText(mockText))
    const itemCheckbox = container.querySelector('input[type="checkbox"]')

    expect(itemCheckbox).toBeChecked()
  })

  it("Add a todo and mark it as complete by tapping on the checkbox", () => {
    const mockText = "[dummy text]"
    const { container, getByTestId } = render(<TodoList />)

    const todoInputField = getByTestId("todoInput")
    const form = container.querySelector("form") as HTMLFormElement

    todoInputField.focus()
    fireEvent.input(todoInputField, { target: { value: mockText } })
    fireEvent.submit(form)

    const itemCheckbox = container.querySelector(
      'input[type="checkbox"]'
    ) as HTMLInputElement
    fireEvent.click(itemCheckbox)

    expect(itemCheckbox).toBeChecked()
  })
})
