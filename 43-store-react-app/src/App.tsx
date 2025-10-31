import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from './components/Navbar.tsx'
import Products from './pages/Products.tsx'
import Posts from './pages/Posts.tsx'
import Users from './pages/Users.tsx'
import Todos from './pages/Todos.tsx'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

// ! TODO: почати урок із створення модального вікна та форми для додавання продукту
