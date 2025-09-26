import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import Menu from './components/Menu'
import FooterMenu from './components/FooterMenu'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterMenu />
    </BrowserRouter>
  )
}

export default App
