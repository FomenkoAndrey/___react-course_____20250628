import { BrowserRouter, Route, Routes } from 'react-router'
import About from './components/About'
import Home from './components/Home'
import Navigation from './components/Navigation'

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
