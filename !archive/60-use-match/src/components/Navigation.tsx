import { Link, useMatch } from 'react-router'

const Navigation = () => {
  const homeMatch = useMatch('/')
  console.log('🚀 ~ Navigation ~ homeMatch:', homeMatch)
  const aboutMatch = useMatch('/about')
  console.log('🚀 ~ Navigation ~ aboutMatch:', aboutMatch)

  return (
    <nav>
      <Link to="/" className={homeMatch ? 'activeLink' : ''}>
        Home
      </Link>
      <Link to="/about" className={aboutMatch ? 'activeLink' : ''}>
        About
      </Link>
    </nav>
  )
}

export default Navigation
