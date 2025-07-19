import type { ComponentType } from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Contacts from '../components/Contacts'
import Features from '../components/Features'
import ErrorPage from '../components/ErrorPage'
import RevalidatorDemo from '../components/RevalidatorDemo'

export interface Route {
  path: string
  label: string
  Component: ComponentType
}

export const menuRoutes: Route[] = [
  { path: '/', label: 'Home', Component: Home },
  { path: '/about', label: 'About', Component: About },
  { path: '/contacts', label: 'Contacts', Component: Contacts },
  { path: '/features', label: 'Features', Component: Features },
  { path: '/error', label: 'Error', Component: ErrorPage },
  { path: '/revalidator', label: 'Revalidator', Component: RevalidatorDemo }
]

export const routes: Route[] = [...menuRoutes, { path: '/features/:id', label: 'Feature', Component: Features }]
