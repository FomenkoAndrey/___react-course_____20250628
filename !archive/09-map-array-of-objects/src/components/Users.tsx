import User from './User'
import { MOCK_USERS } from '../data/mock-users'
import type { UserInterface } from '../types/User.interface'

const Users = () => {
  return (
    <div>
      {MOCK_USERS.map((user: UserInterface) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  )
}

export default Users
