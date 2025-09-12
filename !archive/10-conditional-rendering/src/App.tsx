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
      <Button onClick={incrementCount}>
        <b>Increment</b>
      </Button>
      <Button onClick={decrementCount}>
        <span>Decrement</span>
      </Button>
      {count !== 0 && (
        <Button onClick={resetCount}>
          <i>Reset</i>
        </Button>
      )}
    </div>
  )
}

export default App
