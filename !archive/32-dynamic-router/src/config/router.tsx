import { createBrowserRouter } from 'react-router'
import { routes } from './routes.config'
import Layout from '../components/Layout'
import NotFound from '../components/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      ...routes.map(({ path, Component }) => ({
        path: path === '/' ? '' : path.slice(1),
        element: <Component />
      })),
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])
