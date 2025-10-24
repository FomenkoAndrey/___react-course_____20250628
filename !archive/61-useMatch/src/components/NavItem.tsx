import { Link, useMatch } from 'react-router'

interface NavItemProps {
  to: string
  children: React.ReactNode
}

const NavItem = ({ to, children }: NavItemProps) => {
  const match = useMatch(to)

  return (
    <li>
      <Link
        to={to}
        className={
          match ? 'navigation-link navigation-link--active' : 'navigation-link'
        }
      >
        {children}
      </Link>
    </li>
  )
}

export default NavItem
