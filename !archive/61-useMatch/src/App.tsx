import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Profile from './components/Profile'
import LocationInfo from './components/LocationInfo'

const App = () => {
  return (
    <Router>
      <div style={{ padding: '1rem' }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/location" element={<LocationInfo />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
