import { Outlet } from 'react-router'
import Footer from './Footer'
import Header from './common/Header'

const Layout = () => {
  return (
    <div className="container vertical-flex-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
