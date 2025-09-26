import type { RouteInterface } from '../types/Route.interface'
import Home from '../components/Home'
import About from '../components/About'
import Contacts from '../components/Contacts'
import Features from '../components/Features'
import RevalidatorDemo from '../components/RevalidatorDemo'
import ErrorPage from '../components/ErrorPage'

export const menuRoutes: RouteInterface[] = [
  {
    path: '/',
    label: 'Home',
    Component: Home
  },
  {
    path: '/about',
    label: 'About',
    Component: About
  },
  {
    path: '/contacts',
    label: 'Contacts',
    Component: Contacts
  },
  {
    path: '/features',
    label: 'Features',
    Component: Features
  },
  {
    path: '/error',
    label: 'Error',
    Component: ErrorPage
  },
  {
    path: '/revalidator-demo',
    label: 'Revalidator',
    Component: RevalidatorDemo
  }
]

export const routes: RouteInterface[] = [
  ...menuRoutes,
  {
    path: '/features/:id',
    label: 'Feature',
    Component: Features
  }
]
