import { useState } from 'react'
import Counter from './components/Counter'
import Button from './components/Button'

const textArray = ['Increment', 'Count + 1', 'Increase', 'One more', 'Add 1', '+1']

const App = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <Counter count={count} />
      {textArray.map((text, index) => (
        <Button key={index} onClick={handleIncrement}>
          {text}
        </Button>
      ))}
    </div>
  )
}

export default App
