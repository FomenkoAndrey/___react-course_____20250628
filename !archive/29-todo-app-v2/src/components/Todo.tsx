import { useContext } from 'react'
import { RiCheckboxFill, RiCheckboxBlankLine, RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri'
import type { TodoInterface } from '../types/Todo.interface'
import { Context } from '../context/context'

interface TodoProps {
  todo: TodoInterface
}

const Todo = ({ todo: { id, title, completed } }: TodoProps) => {
  const { deleteTodo, toggleTodo } = useContext(Context)

  const handleDelete = () => deleteTodo(id)

  const handleToggle = () => toggleTodo(id)

  return (
    <div className={`todo${completed ? ' todo--completed' : ''}`}>
      <div className="todo__id">{id}</div>
      <RiTodoFill className="todo__icon" />
      <h2 className="todo__title">{title}</h2>
      <div className="todo__completed">{completed ? 'Completed' : 'Not Completed'}</div>
      <RiDeleteBin2Line className="todo__delete-btn" onClick={handleDelete} />
      {completed ? (
        <RiCheckboxFill className="todo__check-btn" onClick={handleToggle} />
      ) : (
        <RiCheckboxBlankLine className="todo__check-btn" onClick={handleToggle} />
      )}
    </div>
  )
}

export default Todo
