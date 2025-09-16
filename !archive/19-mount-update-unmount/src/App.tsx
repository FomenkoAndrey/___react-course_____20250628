import { useState } from 'react'
import Test from './components/Test'

const App = () => {
  const [showComponent, setShowComponent] = useState(true)

  const toggleComponent = () => {
    setShowComponent((prevShowComponent) => !prevShowComponent)
  }

  return (
    <div>
      <button onClick={toggleComponent}>Toggle Component</button>
      {showComponent && <Test />}
    </div>
  )
}

export default App
