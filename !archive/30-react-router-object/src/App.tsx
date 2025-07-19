import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import Contacts from './components/Contacts'
import Menu from './components/Menu'
import FooterLinks from './components/FooterLinks'
import type { ReactElement } from 'react'

const withLayout = (Component: () => ReactElement) => (
  <>
    <Menu />
    <Component />
    <FooterLinks />
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
