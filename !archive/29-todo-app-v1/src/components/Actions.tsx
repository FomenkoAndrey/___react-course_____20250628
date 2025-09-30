import { RiCheckboxCircleLine, RiDeleteBin5Line } from 'react-icons/ri'
import Button from './Button'

interface ActionsProps {
  onDeleteAllTodos: () => void
  onClearCompletedTodos: () => void
  completedTodosCount: number
}

const Actions = ({
  onDeleteAllTodos,
  onClearCompletedTodos,
  completedTodosCount
}: ActionsProps) => {
  return (
    <div className="todos__actions">
      <Button
        onClick={onDeleteAllTodos}
        title="Delete All Todos"
        type="button"
        disabled={false}
      >
        <RiDeleteBin5Line />
      </Button>
      <Button
        onClick={onClearCompletedTodos}
        title="Clear Completed Todos"
        type="button"
        disabled={completedTodosCount === 0}
      >
        <RiCheckboxCircleLine />
      </Button>
    </div>
  )
}

export default Actions
