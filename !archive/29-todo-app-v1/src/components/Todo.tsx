import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import type { TodoInterface } from '../types/Todo.interface'

interface TodoProps {
  todo: TodoInterface
  onDeleteTodo: (id: string) => void
  onToggleTodo: (id: string) => void
}

const Todo = ({
  todo: { id, title, completed },
  onDeleteTodo,
  onToggleTodo
}: TodoProps) => {
  return (
    <div className={`todo${completed ? ' todo--completed' : ''}`}>
      <div className="todo__id">{id}</div>
      <RiTodoFill className="todo__icon" />
      <h2 className="todo__title">{title}</h2>
      <div className="todo__completed">
        {completed ? 'Completed' : 'Not Completed'}
      </div>
      <RiDeleteBin2Line
        className="todo__delete-btn"
        onClick={() => onDeleteTodo(id)}
      />
      <FaCheck className="todo__check-btn" onClick={() => onToggleTodo(id)} />
    </div>
  )
}

export default Todo
