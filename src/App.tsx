import React from "react"
import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import { green, deepPurple } from "@material-ui/core/colors"

import { TodoList } from "./TodoList"

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
    <TodoList theme={theme} />
  </ThemeProvider>
)

export default App
