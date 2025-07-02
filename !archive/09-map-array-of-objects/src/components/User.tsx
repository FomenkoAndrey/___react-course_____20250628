import type { UserInterface } from '../types/User.interface'

const User = ({ id, name, username, email, phone, website }: UserInterface) => {
  return (
    <div>
      <h1>
        {id} - {name}
      </h1>
      <p>{username}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
      <hr />
    </div>
  )
}

export default User
