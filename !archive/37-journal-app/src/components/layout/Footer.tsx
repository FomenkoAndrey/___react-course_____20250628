import { Link } from 'react-router'
import { routes } from '../../config/routes.config'

const Footer = () => {
  return (
    <div>
      {routes.map(({ path, label }) => (
        <Link key={path} to={path}>
          {label}
        </Link>
      ))}
    </div>
  )
}

export default Footer
