import { Link, useMatch } from 'react-router'

const Navigation = () => {
  const homeMatch = useMatch('/')
  const aboutMatch = useMatch('/about')

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className={homeMatch ? 'activeLink' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={aboutMatch ? 'activeLink' : ''}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
