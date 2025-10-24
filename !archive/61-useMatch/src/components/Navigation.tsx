import NavItem from './NavItem'

const Navigation = () => {
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/profile', label: 'Profile' },
    { to: '/location', label: 'LocationInfo' }
  ]

  return (
    <nav className="navigation">
      <ul className="navigation-list">
        {navItems.map((item) => (
          <NavItem key={item.to} to={item.to}>
            {item.label}
          </NavItem>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
