interface UserProps {
  id: number
  name: string
  email: string
  username: string
}

const User = ({ id, name, email, username }: UserProps) => {
  return (
    <div style={{ borderBottom: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>
        {id}. {name}
      </h2>
      <p>{email}</p>
      <p>{username}</p>
    </div>
  )
}

export default User
