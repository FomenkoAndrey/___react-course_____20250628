import { ComponentType } from 'react'
import Home from '../components/Home'
import Features from '../components/Features'
import About from '../components/About'
import Contacts from '../components/Contacts'

interface Route {
  path: string
  label: string
  Component: ComponentType
}

export const routes: Route[] = [
  { path: '/', label: 'Home', Component: Home },
  { path: '/features', label: 'Features', Component: Features },
  { path: '/about', label: 'About', Component: About },
  { path: '/contacts', label: 'Contacts', Component: Contacts }
]
