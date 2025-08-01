import { NavLink } from 'react-router'
import { menuRoutes } from '../config/routes.config'

const Menu = () => {
  return (
    <nav>
      <ul>
        {menuRoutes.map(({ path, label }) => (
          <li key={path}>
            <NavLink to={path}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
