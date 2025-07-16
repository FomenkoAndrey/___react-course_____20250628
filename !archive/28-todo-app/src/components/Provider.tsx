import { useState, type ReactNode } from 'react'
import { Context } from '../context/Context'
import type { TodoInterface } from '../types/Todo.interface'
import { MOCK_TODOS } from '../data/mock-todos'

interface ProviderProps {
  children: ReactNode
}

const Provider = ({ children }: ProviderProps) => {
  const [todos, setTodos] = useState<TodoInterface[]>(MOCK_TODOS)

  const addTodo = (todo: TodoInterface) => {
    setTodos([...todos, todo])
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const deleteAllTodos = () => {
    setTodos([])
  }

  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const toggleTodo = (id: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const completedTodosCount = todos.filter((todo) => todo.completed).length

  return (
    <Context.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        deleteAllTodos,
        clearCompletedTodos,
        toggleTodo,
        completedTodosCount
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Provider
