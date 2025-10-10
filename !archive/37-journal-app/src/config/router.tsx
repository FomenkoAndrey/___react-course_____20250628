import { createBrowserRouter } from 'react-router'
import Layout from '../components/layout/Layout'
import NotFound from '../components/pages/NotFound'
import { routes } from './routes.config'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      ...routes.map(({ path, Component }) => ({
        path,
        element: <Component />
      })),
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])
