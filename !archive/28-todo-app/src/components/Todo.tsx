import { useContext } from 'react'
import { RiCheckboxBlankLine, RiCheckboxFill, RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri'
import type { TodoInterface } from '../types/Todo.interface'
import { Context } from '../context/Context'

interface TodoProps {
  todo: TodoInterface
}

const Todo = ({ todo: { id, title, completed } }: TodoProps) => {
  const { deleteTodo, toggleTodo } = useContext(Context)

  return (
    <div className={`todo ${completed ? 'todo--completed' : ''}`}>
      <div className="todo__id">{id}</div>
      <RiTodoFill className="todo__icon" />
      <h2 className="todo__title">{title}</h2>
      <div className="todo__completed">{completed.toString()}</div>
      <RiDeleteBin2Line className="todo__delete-btn" onClick={() => deleteTodo(id)} />
      {completed ? (
        <RiCheckboxFill className="todo__check-btn" onClick={() => toggleTodo(id)} />
      ) : (
        <RiCheckboxBlankLine className="todo__check-btn" onClick={() => toggleTodo(id)} />
      )}
    </div>
  )
}

export default Todo
