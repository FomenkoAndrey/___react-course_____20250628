import { useContext } from 'react'
import { Context } from '../context/Context'
import Todo from './Todo'

const Todos = () => {
  const { todos, completedTodosCount } = useContext(Context)

  return (
    <div className="todos">
      {todos.length === 0 && <p className="todos__empty">Todo list is empty</p>}
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
      {completedTodosCount > 0 && (
        <p className="todos__message">
          You have {completedTodosCount}{' '}
          {completedTodosCount === 1 ? 'todo' : 'todos'} completed
        </p>
      )}
    </div>
  )
}

export default Todos
