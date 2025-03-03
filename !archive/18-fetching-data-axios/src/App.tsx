import { useEffect, useState } from 'react'
import { UserInterface } from './types/User.interface'
import { fetchData } from './api/fetchData'

const App = () => {
  const [users, setUsers] = useState<UserInterface[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDataAndHandleErrors = async () => {
      try {
        setIsLoading(true)
        const data = await fetchData()
        setUsers(data)
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDataAndHandleErrors()
  }, [])

  return (
    <div>
      <h1>Users list</h1>
      {isLoading && <p style={{ fontSize: '30px' }}>Loading...</p>}
      {error && <p style={{ fontSize: '30px', color: 'red' }}>{error}</p>}
      {!isLoading && !error && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.username}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
