import type { RouteInterface } from '../types/Route.interface'
import Home from '../components/Home'
import About from '../components/About'
import Contacts from '../components/Contacts'
import Features from '../components/Features'

export const routes: RouteInterface[] = [
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
  }
]
