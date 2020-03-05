import React from "react"
import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import { green, deepPurple } from "@material-ui/core/colors"

import { TodoList } from "./TodoList"
import { TodoListDirectory } from "./TodoListDirectory"

import "./App.scss"

const theme = createMuiTheme({
  palette: {
    primary: { main: deepPurple[500] },
    secondary: {
      main: green[600]
    }
  }
})

const App = () => (
  <ThemeProvider theme={theme}>
    <main className="appContainer">
      <TodoListDirectory />
      <TodoList />
    </main>
  </ThemeProvider>
)

export default App
