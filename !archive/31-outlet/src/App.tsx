import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import Contacts from './components/Contacts'
import Layout from './components/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contacts',
        element: <Contacts />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
