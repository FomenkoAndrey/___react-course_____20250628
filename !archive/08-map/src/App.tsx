import Counter from './components/Counter'
import Button from './components/Button'
import { useState } from 'react'

const captionArray = ['Increment', 'Count + 1', 'Increase', 'One More']

const App = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => setCount(count + 1)
  const decrementCount = () => setCount(count - 1)
  const resetCount = () => setCount(0)

  return (
    <div>
      <Counter count={count} />

      {captionArray.map((captionElement, index) => {
        return <Button onClick={incrementCount} caption={captionElement} key={index} />
      })}

      <Button onClick={decrementCount} caption="Decrement" />
      <Button onClick={resetCount} caption="Reset" />
    </div>
  )
}

export default App
