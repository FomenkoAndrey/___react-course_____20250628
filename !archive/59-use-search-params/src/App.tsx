import { BrowserRouter, Route, Routes } from 'react-router'
import TestComponent from './components/TestComponent'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
