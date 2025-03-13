import { ComponentType } from 'react'
import Home from '../components/Home'
import Features from '../components/Features'
import About from '../components/About'
import Contacts from '../components/Contacts'
import RevalidatorDemo from '../components/RevalidatorDemo'
import ErrorPage from '../components/ErrorPage'

interface Route {
  path: string
  label: string
  Component: ComponentType
}

export const routes: Route[] = [
  { path: '/', label: 'Home', Component: Home },
  { path: '/features', label: 'Features', Component: Features },
  { path: '/about', label: 'About', Component: About },
  { path: '/contacts', label: 'Contacts', Component: Contacts },
  { path: '/error', label: 'Error', Component: ErrorPage },
  { path: '/revalidator', label: 'Revalidator', Component: RevalidatorDemo }
]
