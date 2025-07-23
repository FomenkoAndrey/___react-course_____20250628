import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import NotFound from './components/Pages/NotFound'
import Contacts from './components/Pages/Contacts'
import Layout from './components/Common/Layout'
import Registration from './components/Auth/Registration'
import Login from './components/Auth/Login'
import Articles from './components/Pages/Articles'
import SingleArticle from './components/Pages/SingleArticle'

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
        path: 'articles',
        element: <Articles />
      },
      {
        path: 'articles/:slug/:id',
        element: <SingleArticle />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contacts',
        element: <Contacts />
      }
    ]
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'registration',
    element: <Registration />
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
