import { useLocation } from 'react-router'

const LocationInfo = () => {
  const location = useLocation()

  return (
    <div>
      <h2>Інформація про поточний URL</h2>
      <p>
        <strong>Шлях:</strong> {location.pathname}
      </p>
      <p>
        <strong>Пошук:</strong> {location.search}
      </p>
      <p>
        <strong>Хеш:</strong> {location.hash}
      </p>
      <p>
        <strong>State:</strong>{' '}
        {location.state ? JSON.stringify(location.state) : 'немає'}
      </p>
    </div>
  )
}

export default LocationInfo
