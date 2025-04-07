import { BrowserRouter, Route, Routes } from 'react-router'
import SearchParamsComponent from './components/SearchParamsComponent'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchParamsComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
