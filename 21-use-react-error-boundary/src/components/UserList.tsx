import { use } from 'react'
import { fetchData } from '../utils/api'
import { UserInterface } from '../types/User.inteface'

const UserList = () => {
  const users: UserInterface[] = use(fetchData)

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

export default UserList
