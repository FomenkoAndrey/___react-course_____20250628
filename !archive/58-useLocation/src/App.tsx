import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/Home'
import DemoPage from './components/DemoPage'
import Profile from './components/Profile'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
