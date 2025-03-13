import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import { ReactElement } from 'react'
import Footer from './components/Footer'
import Menu from './components/Menu'
import NotFound from './components/NotFound'

const withLayout = (Component: () => ReactElement) => (
  <>
    <Menu />
    <Component />
    <Footer />
  </>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: withLayout(Home)
  },
  {
    path: '/about',
    element: withLayout(About)
  },
  {
    path: '/contacts',
    element: withLayout(Contacts)
  },
  {
    path: '*',
    element: withLayout(NotFound)
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
