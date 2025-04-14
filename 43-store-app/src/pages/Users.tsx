import { Link } from 'react-router'
import { useFetch } from '../hooks/useFetch'
import { UserInterface } from '../types/user.interface'

const Users = () => {
  const {
    data: users,
    error,
    isLoading
  } = useFetch<UserInterface>('https://jsonplaceholder.typicode.com/users')

  return (
    <div>
      <h1>Users</h1>
      {isLoading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      <ul>
        {users?.map((user: UserInterface) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users
