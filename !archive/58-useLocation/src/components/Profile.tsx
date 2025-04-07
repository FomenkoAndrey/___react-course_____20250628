import { Link, useLocation } from 'react-router'

const Profile = () => {
  const location = useLocation()
  const { userId, userName } = location.state || {
    userId: null,
    userName: 'Гість'
  }

  return (
    <div>
      <h1>Профіль користувача</h1>
      <h2>ID користувача: {userId}</h2>
      <h3>Імя користувача: {userName}</h3>
      <Link to="/">Повернутися на головну</Link>
    </div>
  )
}

export default Profile
