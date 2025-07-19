import Menu from './Menu'
import FooterLinks from './FooterLinks'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
      <Menu />
      <Outlet />
      <FooterLinks />
    </>
  )
}

export default Layout
