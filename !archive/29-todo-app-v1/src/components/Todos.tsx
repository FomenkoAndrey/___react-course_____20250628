import Todo from './Todo'
import type { TodoInterface } from '../types/Todo.interface'

interface TodosProps {
  todos: TodoInterface[]
  onDeleteTodo: (id: string) => void
  onToggleTodo: (id: string) => void
}

const Todos = ({ todos, onDeleteTodo, onToggleTodo }: TodosProps) => {
  return (
    <div className="todos">
      {todos.length === 0 && <p className="todos__empty">No todos found</p>}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </div>
  )
}

export default Todos
