import { TodoInterface } from '../types/Todo.interface'
import Loading from '../Loading'
import { useFetch } from '../hooks/useFetch'

const Todos = () => {
  const { data: todos, error, isLoading } = useFetch<TodoInterface>('https://jsonplaceholder.typicode.com/todos', 10)

  return (
    <div>
      <h1>Todos Page</h1>
      {isLoading && <Loading />}
      {error && <h2 className="error">{error}</h2>}
      <ul>
        {!!todos.length && todos.map(todo => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} readOnly />
            <span>{todo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
