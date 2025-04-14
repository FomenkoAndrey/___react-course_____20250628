import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink to="/" className="navbar__link">
              Home
            </NavLink>
            <NavLink to="/users" className="navbar__link">
              Users
            </NavLink>
            <NavLink to="/posts" className="navbar__link">
              Posts
            </NavLink>
            <NavLink to="/todos" className="navbar__link">
              Todos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
