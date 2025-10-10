import { NavLink } from 'react-router'
import { routes } from '../../config/routes.config'

const Menu = () => {
  return (
    <nav>
      <ul>
        {routes
          .filter(({ showInMenu }) => showInMenu)
          .map(({ path, label }) => (
            <li key={path}>
              <NavLink to={path}>{label}</NavLink>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default Menu
