import { useState } from 'react'
import TestComponent from './components/TestComponent'

const App = () => {
  const [showComponent, setShowComponent] = useState(true)

  const toggleComponent = () => {
    setShowComponent(!showComponent)
  }

  return (
    <div>
      <button onClick={toggleComponent}>{showComponent ? 'Unmount Component' : 'Mount Component'}</button>
      {showComponent && <TestComponent />}
    </div>
  )
}

export default App
