import { NavLink } from 'react-router'

interface LinkInterface {
  path: string
  label: string
}

const Navbar = () => {
  const navLinks: LinkInterface[] = [
    { path: '/', label: 'Products' },
    { path: '/posts', label: 'Posts' },
    { path: '/users', label: 'Users' },
    { path: '/todos', label: 'Todos' }
  ]

  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar__list">
          {navLinks.map((link) => (
            <li key={link.path} className="navbar__item">
              <NavLink to={link.path}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
