import Todo from './Todo'
import { TodoInterface } from '../types/Todo.interface'

interface TodosProps {
  todos: TodoInterface[]
  onDeleteTodo: (id: number) => void
  onToggleTodo: (id: number) => void
}

const Todos = ({ todos, onDeleteTodo, onToggleTodo }: TodosProps) => {
  return (
    <div className="todos">
      {todos.length === 0 && <p className="todos__empty">Todo list is empty</p>}
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
