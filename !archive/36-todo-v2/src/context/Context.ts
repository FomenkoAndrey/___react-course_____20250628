import { createContext } from 'react'
import { TodoInterface } from '../types/Todo.interface'

interface ContextType {
  todos: TodoInterface[]
  addTodo: (todo: TodoInterface) => void
  deleteTodo: (id: string) => void
  deleteAllTodos: () => void
  clearCompletedTodos: () => void
  toggleTodo: (id: string) => void
  completedTodosCount: number
}

const initialState: ContextType = {
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
  deleteAllTodos: () => {},
  clearCompletedTodos: () => {},
  toggleTodo: () => {},
  completedTodosCount: 0
}

export const Context = createContext<ContextType>(initialState)
