import { Link, useLocation } from 'react-router'

const QueryParamsExample = () => {
  const location = useLocation()

  const getQueryParams = () => {
    const searchParams = new URLSearchParams(location.search)
    const params: Record<string, string> = {}

    for (const [key, value] of searchParams.entries()) {
      params[key] = value
    }

    return params
  }

  const queryParams = getQueryParams()

  return (
    <div>
      <h3>Параметри запиту:</h3>
      {Object.keys(queryParams).length > 0 ? (
        <ul>
          {Object.entries(queryParams).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      ) : (
        <p>
          Немає параметрів запиту. Спробуйте додати їх у URL як
          <code>?key1=value1&key2=value2</code>
        </p>
      )}
      <div>
        <Link to="/demo?section=1&sort=asc">Сортувати за зростанням</Link>
        <Link to="/demo?section=1&sort=desc">Сортувати за спаданням</Link>
      </div>
    </div>
  )
}

export default QueryParamsExample
