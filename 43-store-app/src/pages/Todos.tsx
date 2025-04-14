import { Link } from 'react-router'
import { useFetch } from '../hooks/useFetch'
import { TodoInterface } from '../types/todo.interface'

const Todos = () => {
  const {
    data: todos,
    error,
    isLoading
  } = useFetch<TodoInterface>('https://jsonplaceholder.typicode.com/todos', 20)

  return (
    <div>
      <h1>Todos</h1>
      {isLoading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      <ul>
        {todos?.map((todo: TodoInterface) => (
          <li key={todo.id}>
            <Link to={`/todos/${todo.id}`}>
              <span
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none'
                }}
              >
                {todo.title}
              </span>
              {todo.completed ? ' ✅' : ' ❌'}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
