import { useContext } from 'react'
import { Context } from '../context/Context'
import Todo from './Todo'

const Todos = () => {
  const { todos, completedTodosCount } = useContext(Context)

  return (
    <div className="todos">
      {todos.length === 0 && <p className="todos__empty">No todos yet</p>}
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
      {completedTodosCount > 0 && (
        <div className="todos__message">
          You have {completedTodosCount} completed {completedTodosCount === 1 ? 'todo' : 'todos'}
        </div>
      )}
    </div>
  )
}

export default Todos
