import { Outlet } from 'react-router'
import Menu from './Menu'
import Footer from './Footer'
const Layout = () => {
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
