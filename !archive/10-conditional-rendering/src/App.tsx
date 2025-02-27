import { useState } from 'react'
import Counter from './components/Counter.tsx'
import Button from './components/Button.tsx'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div>
      <Counter count={count} />
      <Button onClick={increment} text="Increment" />
      {count > 0 && <Button onClick={reset} text="Reset" />}
    </div>
  )
}

export default App
