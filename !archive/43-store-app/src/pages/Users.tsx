import { UserInterface } from '../types/User.interface'
import Loading from '../Loading'
import { useFetch } from '../hooks/useFetch.ts'

const Users = () => {
  const { data: users, error, isLoading } = useFetch<UserInterface>('https://jsonplaceholder.typicode.com/users')

  return (
    <div>
      <h1>Users Page</h1>
      {isLoading && <Loading />}
      {error && <h2 className="error">{error}</h2>}
      <ul>
        {!!users.length && users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Users
