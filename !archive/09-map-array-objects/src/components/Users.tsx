import { MOCK_USERS } from '../data/mock-users'
import { UserInterface } from '../types/User.interface'
import User from './User'

const users: UserInterface[] = MOCK_USERS

const Users = () => {
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  )
}

export default Users
