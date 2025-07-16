import { useContext } from 'react'
import { RiCheckboxCircleLine, RiDeleteBin5Line } from 'react-icons/ri'
import { Context } from '../context/Context'
import Button from './Button'

const Actions = () => {
  const { deleteAllTodos, clearCompletedTodos, completedTodosCount } = useContext(Context)

  console.log(completedTodosCount)

  return (
    <div className="todos__actions">
      <Button type="button" onClick={deleteAllTodos} title="Delete All Todos">
        <RiDeleteBin5Line />
      </Button>
      <Button type="button" onClick={clearCompletedTodos} title="Clear Completed Todos" disabled={!completedTodosCount}>
        <RiCheckboxCircleLine />
      </Button>
    </div>
  )
}

export default Actions
