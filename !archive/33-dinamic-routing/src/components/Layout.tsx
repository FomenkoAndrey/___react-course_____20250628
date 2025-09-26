import { Outlet } from 'react-router'
import Menu from './Menu'
import Footer from './Footer'

const Layout = () => (
  <>
    <Menu />
    <Outlet />
    <Footer />
  </>
)

export default Layout
