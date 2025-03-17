import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri'
import { TodoInterface } from '../types/Todo.interface'
import { FaCheck } from 'react-icons/fa6'

interface TodoProps {
  todo: TodoInterface
  onDeleteTodo: (id: number) => void
  onToggleTodo: (id: number) => void
}

const Todo = ({
  todo: { id, title, completed },
  onDeleteTodo,
  onToggleTodo
}: TodoProps) => {
  return (
    <div className={`todo ${completed ? 'todo--completed' : ''}`}>
      <div className="todo__id">{id}</div>
      <RiTodoFill className="todo__icon" />
      <h2 className="todo__title">{title}</h2>
      <div className="todo__completed">{completed.toString()}</div>
      <RiDeleteBin2Line
        className="todo__delete-btn"
        onClick={() => onDeleteTodo(id)}
      />
      <FaCheck className="todo__check-btn" onClick={() => onToggleTodo(id)} />
    </div>
  )
}

export default Todo
