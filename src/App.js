import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Button from './components/Button'
import GlobalStyle from './styles/globalStyle'
import TodoList from './components/TodoList'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Button />
      <TodoList />
    </ThemeProvider>
  )
}

export default App
