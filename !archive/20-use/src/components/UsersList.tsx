import { use } from 'react'
import { fetchDataOptimized } from '../utils/api'
import type { UserInterface } from '../types/User.interface'

const UsersList = () => {
  const users: UserInterface[] = use(fetchDataOptimized)
  return (
    <ul>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.username}</p>
        </div>
      ))}
    </ul>
  )
}

export default UsersList
