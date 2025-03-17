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

  const deleteAllTodosHandler = () => {
    setTodos([])
  }

  const clearCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const toggleTodoHandler = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const completedTodosCount = todos.filter((todo) => todo.completed).length
  console.log(completedTodosCount)

  return (
    <div className="container">
      <h1>Todo App</h1>
      <Form onAddTodo={addTodoHandler} />
      {todos.length > 0 && (
        <Actions
          deleteAllTodos={deleteAllTodosHandler}
          clearCompletedTodos={clearCompletedTodosHandler}
          completedTodosExist={!!completedTodosCount}
        />
      )}
      <Todos
        todos={todos}
        onDeleteTodo={deleteTodoHandler}
        onToggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && (
        <p className="todos__message">{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        }`}</p>
      )}
    </div>
  )
}

export default App
