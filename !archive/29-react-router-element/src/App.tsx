import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import Contacts from './components/Contacts'
import Menu from './components/Menu'
import FooterLinks from './components/FooterLinks'

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
      <FooterLinks />
    </BrowserRouter>
  )
}

export default App
