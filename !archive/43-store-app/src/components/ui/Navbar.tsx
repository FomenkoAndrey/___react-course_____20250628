import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar__List">
          <li className="navbar__item">
            <NavLink to="/" className="navbar__link">Products</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/posts" className="navbar__link">Posts</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/users" className="navbar__link">Users</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/todos" className="navbar__link">Todos</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
