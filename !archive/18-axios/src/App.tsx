import { useState, useEffect } from 'react'
import type { UserInterface } from './types/User.interface'
import { fetchData } from './utils/api'

const App = () => {
  const [users, setUsers] = useState<UserInterface[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDataAndHandleLoading = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const data = await fetchData()
        setUsers(data)
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDataAndHandleLoading()
  }, [])

  return (
    <div>
      <h1>Users list</h1>
      {isLoading && (
        <p style={{ color: 'green', fontSize: '40px' }}>Loading...</p>
      )}
      {error && <p style={{ color: 'red', fontSize: '40px' }}>{error}</p>}
      {!isLoading && !error && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
