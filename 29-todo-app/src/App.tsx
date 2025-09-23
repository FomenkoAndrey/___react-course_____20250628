import { useState } from 'react'
import Form from './components/Form'
import Actions from './components/Actions'
import Todos from './components/Todos'
import { MOCK_TODOS } from './data/mock-todos'
import type { TodoInterface } from './types/Todo.interface'

const App = () => {
  const [todos, setTodos] = useState<TodoInterface[]>(MOCK_TODOS)

  const addTodoHandler = (todo: TodoInterface) => {
    setTodos([...todos, todo])
  }

  const deleteTodoHandler = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteAllTodosHandler = () => {
    setTodos([])
  }

  const clearCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const completedTodosCount: number = todos.filter(
    (todo) => todo.completed
  ).length

  console.log(completedTodosCount)

  return (
    <div className="container">
      <h1>Todo List</h1>
      <Form onAddTodo={addTodoHandler} />
      {todos.length !== 0 && (
        <Actions
          onDeleteAllTodos={deleteAllTodosHandler}
          onClearCompletedTodos={clearCompletedTodosHandler}
          completedTodosCount={completedTodosCount}
        />
      )}

      <Todos
        todos={todos}
        onDeleteTodo={deleteTodoHandler}
        onToggleTodo={toggleTodoHandler}
      />

      {completedTodosCount > 0 && (
        <p className="todos__message">{`You have completed ${completedTodosCount} ${
          completedTodosCount === 1 ? 'todo' : 'todos'
        }`}</p>
      )}
    </div>
  )
}

export default App
