import { useContext } from 'react'
import { Context } from '../context/Context'
import { RiCheckboxCircleLine, RiDeleteBin5Line } from 'react-icons/ri'
import Button from './Button'

const Actions = () => {
  const { deleteAllTodos, clearCompletedTodos, completedTodosCount } =
    useContext(Context)

  const completedTodosExist = completedTodosCount > 0
  return (
    <div className="todos__actions">
      <Button title="Delete All Todos" onClick={deleteAllTodos} type="button">
        <RiDeleteBin5Line />
      </Button>

      <Button
        title="Reset All Todos"
        onClick={clearCompletedTodos}
        disabled={!completedTodosExist}
        type="button"
      >
        <RiCheckboxCircleLine />
      </Button>
    </div>
  )
}

export default Actions
