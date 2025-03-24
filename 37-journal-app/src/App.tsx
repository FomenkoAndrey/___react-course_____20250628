import { createBrowserRouter, RouterProvider } from 'react-router'
import NotFound from './components/NotFound'
import Layout from './components/Layout'
import { routes } from './config/router.config'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: routes.map(({ path, Component }) => ({
      path: path === '/' ? '' : path,
      element: <Component />
    }))
  },
  {
    path: '*',
    element: <NotFound />
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
