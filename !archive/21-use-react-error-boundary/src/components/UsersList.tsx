import { use } from 'react'
import type { UserInterface } from '../types/User.interface'
import { fetchDataOptimized } from '../utils/api'

const UsersList = () => {
  const users: UserInterface[] = use(fetchDataOptimized)
  console.log(users)
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default UsersList
