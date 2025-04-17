import React from 'react'
import Products from '../pages/Products'
import Users from '../pages/Users'
import Posts from '../pages/Posts'
import Todos from '../pages/Todos'

// Визначення типів для маршрутів з метаданими
interface RouteConfig {
  path: string
  Component: React.ComponentType
  label: string
  showInNav: boolean
}

// Об'єкти маршрутів з метаданими
export const routes: RouteConfig[] = [
  {
    path: '/',
    Component: Products,
    label: 'Products',
    showInNav: true
  },
  {
    path: '/users',
    Component: Users,
    label: 'Users',
    showInNav: true
  },
  {
    path: '/posts',
    Component: Posts,
    label: 'Posts',
    showInNav: true
  },
  {
    path: '/todos',
    Component: Todos,
    label: 'Todos',
    showInNav: true
  }
]
