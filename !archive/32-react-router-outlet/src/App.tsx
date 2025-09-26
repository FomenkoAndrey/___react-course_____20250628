import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import NotFound from './components/NotFound'

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
