import { createBrowserRouter } from 'react-router'
import { routes } from './routes.config'
import Layout from '../components/Layout'
import NotFound from '../components/NotFound'
import ErrorBoundary from '../components/ErrorBoundary'

const revalidatorLoader = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500))
  return {
    serverData: `Дані з сервера: ${Math.floor(Math.random() * 1000)}`,
    timestamp: new Date().toLocaleTimeString()
  }
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      ...routes.map(({ path, Component }) => ({
        path: path === '/' ? '' : path.slice(1),
        element: <Component />,
        ...(path === '/revalidator' && { loader: revalidatorLoader })
      })),
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])
