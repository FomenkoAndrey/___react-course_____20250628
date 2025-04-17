import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Navbar from './components/layout/Navbar'
import { routes } from './routes/config'

// Створюємо layout-компонент для загального шаблону сторінок з навігацією
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="container">{children}</div>
    </>
  )
}

// Конвертуємо наші маршрути у формат для createBrowserRouter
const routerConfig = routes.map((route) => ({
  path: route.path,
  element: (
    <Layout>
      <route.Component />
    </Layout>
  )
}))

// Створюємо роутер
const router = createBrowserRouter(routerConfig)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
