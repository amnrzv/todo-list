import React from "react"
import { render, fireEvent, Matcher } from "@testing-library/react"

import { TodoList } from "."

describe("Todo List", () => {
  const mockText = "[dummy text]"
  let container: HTMLElement
  let todoListItems: HTMLElement
  let todoInputField: HTMLElement
  let getByText: (text: Matcher) => HTMLElement
  let getByTestId: (text: Matcher) => HTMLElement

  beforeEach(() => {
    const rendered = render(<TodoList />)
    container = rendered.container
    getByText = rendered.getByText
    getByTestId = rendered.getByTestId

    todoListItems = getByTestId("todoListItems")
    todoInputField = getByTestId("todoInput").querySelector(
      "input"
    ) as HTMLInputElement
  })

  describe("Add items", () => {
    it("Adds an item to the todo list by inputting in the field and pressing the button", () => {
      todoInputField.focus()
      fireEvent.input(todoInputField, { target: { value: mockText } })
      fireEvent.submit(
        container.querySelector('button[type="submit"]') as HTMLButtonElement
      )

      expect(todoListItems.childNodes[0]).toHaveTextContent(mockText)
    })

    it("Adds an item to the todo list by inputting in the field and submitting the form", () => {
      const form = container.querySelector("form") as HTMLFormElement

      todoInputField.focus()
      fireEvent.input(todoInputField, { target: { value: mockText } })
      fireEvent.submit(form)

      expect(todoListItems.childNodes[0]).toHaveTextContent(mockText)
    })

    it("Adds multiple items to the todo list", () => {
      const form = container.querySelector("form") as HTMLFormElement

      todoInputField.focus()
      fireEvent.input(todoInputField, { target: { value: mockText } })
      fireEvent.submit(form)

      fireEvent.input(todoInputField, { target: { value: mockText } })
      fireEvent.submit(form)

      expect(todoListItems.childNodes.length).toBe(2)
    })

    it("Cant add an empty item", () => {
      const form = container.querySelector("form") as HTMLFormElement

      todoInputField.focus()
      fireEvent.input(todoInputField, { target: { value: "" } })
      fireEvent.submit(form)

      expect(todoListItems.childNodes.length).toBe(0)
    })
  })

  describe("Mark items", () => {
    beforeEach(() => {
      const form = container.querySelector("form") as HTMLFormElement

      todoInputField.focus()
      fireEvent.input(todoInputField, { target: { value: mockText } })
      fireEvent.submit(form)

      todoInputField.focus()
      fireEvent.input(todoInputField, { target: { value: mockText } })
      fireEvent.submit(form)
    })

    it("Mark a todo as complete by tapping on the text", () => {
      fireEvent.click(todoListItems.querySelectorAll("label")[0])
      const itemCheckbox = todoListItems.querySelectorAll(
        'input[type="checkbox"]'
      )[0]

      expect(itemCheckbox).toBeChecked()
    })

    it("Mark a todo as complete by tapping on the checkbox", () => {
      const itemCheckbox = container.querySelector(
        'input[type="checkbox"]'
      ) as HTMLInputElement
      fireEvent.click(itemCheckbox)

      expect(itemCheckbox).toBeChecked()
    })
  })

  describe("Delete items", () => {
    beforeEach(() => {
      const form = container.querySelector("form") as HTMLFormElement

      todoInputField.focus()
      fireEvent.input(todoInputField, { target: { value: mockText } })
      fireEvent.submit(form)

      todoInputField.focus()
      fireEvent.input(todoInputField, { target: { value: mockText } })
      fireEvent.submit(form)
    })

    it("Hovering over an item shows a delete button", () => {
      fireEvent.mouseEnter(todoListItems.childNodes[0])

      expect(getByTestId("deleteBtn")).toBeVisible()
    })

    it("Hovering over an item and clicking the delete button removes the item from the list", () => {
      fireEvent.mouseEnter(todoListItems.childNodes[1])
      fireEvent.click(getByTestId("deleteBtn"))

      expect(todoListItems.childNodes.length).toBe(1)
    })
  })
})
