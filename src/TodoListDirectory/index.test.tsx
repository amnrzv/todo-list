import React from "react"
import { render, Matcher } from "@testing-library/react"

import { TodoListDirectory } from "."

describe("Todo List Directory", () => {
  let getByTestId: (text: Matcher) => HTMLElement
  beforeEach(() => {
    getByTestId = render(<TodoListDirectory />).getByTestId
  })

  it("Contains an avatar image", () => {
    const avatar = getByTestId("avatar")
    expect(avatar).toBeDefined()
  })

  it("Contains a username", () => {
    const userName = getByTestId("userName")
    expect(userName).toBeDefined()
  })

  it("contains just 1 item in the nav list", () => {
    const navList = getByTestId("navList")
    expect(navList.childNodes.length).toBe(1)
  })

  it("item in the nav list is called 'Team To-Do List'", () => {
    const navList = getByTestId("navList")
    expect(navList.childNodes[0]).toHaveTextContent("Team To-Do List")
  })
})
