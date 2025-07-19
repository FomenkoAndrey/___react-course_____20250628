import type { ComponentType } from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Contacts from '../components/Contacts'

export interface Route {
  path: string
  label: string
  Component: ComponentType
}

export const routes: Route[] = [
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
  }
]
