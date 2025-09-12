import Counter from './components/Counter'
import Button from './components/Button'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => setCount(count + 1)
  const decrementCount = () => setCount(count - 1)
  const resetCount = () => setCount(0)

  return (
    <div>
      <Counter count={count} />
      <Button onClick={incrementCount} caption="Increment" />
      <Button onClick={decrementCount} caption="Decrement" />
      <Button onClick={resetCount} caption="Reset" />
    </div>
  )
}

export default App
