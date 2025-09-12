import { MOCK_USERS } from '../data/mock-users'
import type { UserInterface } from '../types/User.interface'
import User from './User'

const users: UserInterface[] = MOCK_USERS

const Users = () => {
  return (
    <div>
      {users.map((user: UserInterface) => {
        return <User key={user.id} {...user} />
      })}
    </div>
  )
}

export default Users
