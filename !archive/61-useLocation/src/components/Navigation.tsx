import { Link } from 'react-router'

const Navigation = () => {
  return (
    <nav
      style={{
        padding: '1rem',
        backgroundColor: '#f0f0f0',
        marginBottom: '1rem',
        borderRadius: '8px'
      }}
    >
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          gap: '1rem',
          margin: 0,
          padding: 0
        }}
      >
        <li>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: '#333',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              backgroundColor: '#fff',
              border: '1px solid #ddd'
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            style={{
              textDecoration: 'none',
              color: '#333',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              backgroundColor: '#fff',
              border: '1px solid #ddd'
            }}
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            to="/location"
            style={{
              textDecoration: 'none',
              color: '#333',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              backgroundColor: '#fff',
              border: '1px solid #ddd'
            }}
          >
            LocationInfo
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
