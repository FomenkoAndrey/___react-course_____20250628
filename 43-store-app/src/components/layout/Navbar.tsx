import { NavLink } from 'react-router'
import { routes } from '../../routes/config'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar__list">
          <li className="navbar__item">
            {routes
              .filter((route) => route.showInNav)
              .map((route) => (
                <NavLink
                  key={route.path}
                  to={route.path}
                  className="navbar__link"
                >
                  {route.label}
                </NavLink>
              ))}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
