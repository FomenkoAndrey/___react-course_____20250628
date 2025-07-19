import { useLocation } from 'react-router'

const Contacts = () => {
  const location = useLocation()

  console.log(location)

  return (
    <div>
      <h1>Contacts</h1>
      <p>Location: {location.pathname}</p>
    </div>
  )
}

export default Contacts
