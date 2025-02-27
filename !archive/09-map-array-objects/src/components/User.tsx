import { UserInterface } from '../types/User.interface'

const User = ({ id, name, username, email }: UserInterface) => {
  return (
    <div>
      <h3>
        {id} - {name}
      </h3>
      <p>{username}</p>
      <p>{email}</p>
      <hr />
    </div>
  )
}

export default User
