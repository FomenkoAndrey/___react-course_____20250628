import { RiCheckboxCircleLine, RiDeleteBin5Line } from 'react-icons/ri'
import Button from './Button'

interface ActionsProps {
  deleteAllTodos: () => void
  clearCompletedTodos: () => void
  completedTodosExist: boolean
}

const Actions = ({
  deleteAllTodos,
  clearCompletedTodos,
  completedTodosExist
}: ActionsProps) => {
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
