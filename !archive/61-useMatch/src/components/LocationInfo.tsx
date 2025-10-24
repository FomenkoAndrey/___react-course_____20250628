import { useLocation } from 'react-router'

const LocationInfo = () => {
  const location = useLocation()

  return (
    <div>
      <h1>LocationInfo</h1>
      <p>Це сторінка інформації про локацію</p>
      <h2>Шлях: {location.pathname}</h2>
      <h2>Пошук: {location.search}</h2>
      <h2>Хеш: {location.hash}</h2>
    </div>
  )
}

export default LocationInfo
