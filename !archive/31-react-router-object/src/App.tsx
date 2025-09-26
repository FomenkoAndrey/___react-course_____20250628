import type { ComponentType } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import Menu from './components/Menu'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

const LayoutComponent = ({
  component: Component
}: {
  component: ComponentType
}) => (
  <>
    <Menu />
    <Component />
    <Footer />
  </>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutComponent component={Home} />
  },
  {
    path: '/about',
    element: <LayoutComponent component={About} />
  },
  {
    path: '/contacts',
    element: <LayoutComponent component={Contacts} />
  },
  {
    path: '*',
    element: <LayoutComponent component={NotFound} />
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
