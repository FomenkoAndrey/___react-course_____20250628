import Header from './Header'
import Footer from './Footer'
import Main from './Main'

const Layout = () => {
  return (
    <div className="container vertical-flex-container">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Layout
