import { useEffect, useState } from 'react'
import { fetchData } from './utils/api'

interface UserInterface {
  id: number
  name: string
  email: string
  username: string
}

const App = () => {
  const [users, setUsers] = useState<UserInterface[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDataAndHandleLoading = async () => {
      try {
        setIsLoading(true)
        const data = await fetchData()
        console.log(data)
        setUsers(data)
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchDataAndHandleLoading()
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2 style={{ color: 'red' }}>{error}</h2>
  }

  return (
    <div>
      <h1>Users list</h1>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
