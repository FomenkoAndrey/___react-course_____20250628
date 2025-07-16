import { useEffect, useState } from 'react'

interface UserInterface {
  id: number
  name: string
  email: string
  username: string
}

const App = () => {
  const [users, setUsers] = useState<UserInterface[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((error) => console.error('Error:', error))
  }, [])

  console.log(users)

  return <div>App</div>
}

export default App
