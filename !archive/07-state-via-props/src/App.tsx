import { useState } from 'react'
import Counter from './components/Counter.tsx'
import Button from './components/Button.tsx'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
      <div>
        <Counter count={count}/>
        <Button onClick={increment}/>
        <Button onClick={increment}/>
        <Button onClick={increment}/>
      </div>
  )
}

export default App
