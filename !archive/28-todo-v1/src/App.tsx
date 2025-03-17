import { useState } from 'react'
import Actions from './components/Actions'
import Form from './components/Form'
import Todos from './components/Todos'
import { MOCK_TODOS } from './data/mock-todos'
import { TodoInterface } from './types/Todo.interface'

const App = () => {
  const [todos, setTodos] = useState<TodoInterface[]>(MOCK_TODOS)

  const addTodoHandler = (todo: TodoInterface) => {
    setTodos([...todos, todo])
  }

  const deleteTodoHandler = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  return (
    <div className="container">
      <h1>Todo App</h1>
      <Form onAddTodo={addTodoHandler} />

      {/* TODO: дадати actions */}

      <Actions />
      <Todos
        todos={todos}
        onDeleteTodo={deleteTodoHandler}
        onToggleTodo={toggleTodoHandler}
      />
    </div>
  )
}

export default App
