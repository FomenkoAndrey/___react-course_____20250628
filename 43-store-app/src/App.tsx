import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Users from './pages/Users'
import Posts from './pages/Posts'
import Todos from './pages/Todos'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
