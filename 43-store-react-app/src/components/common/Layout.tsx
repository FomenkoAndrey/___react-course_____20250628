import { Outlet } from 'react-router'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}

export default Layout
