import { useState } from 'react'
import Counter from './components/Counter.tsx'
import Button from './components/Button.tsx'

const textArray = ['Increment', 'Count + 1', 'Add one', 'One more time']

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <Counter count={count} />

      {textArray.map((text, index) => (
        <Button key={index} onClick={increment} text={text} />
      ))}
    </div>
  )
}

export default App
