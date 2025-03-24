import { ComponentType } from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Contacts from '../components/Contacts'
import Articles from '../components/pages/Articles'
import SingleArticle from '../components/pages/SingleArticle'

interface Route {
  path: string
  label: string
  Component: ComponentType
  children?: Route[]
}

export const routes: Route[] = [
  { path: '/', label: 'Home', Component: Home },
  { path: '/about', label: 'About', Component: About },
  { path: '/contacts', label: 'Contacts', Component: Contacts },
  { path: '/articles', label: 'Articles', Component: Articles },
  { path: '/articles/:slug', label: 'Article', Component: SingleArticle }
]
