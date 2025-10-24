import { memo, useState } from 'react'
import NonMemoComponent from './components/NonMemoComponent'

const MemoizedComponent = memo(NonMemoComponent)

const App = () => {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')

  return (
    <div>
      <h1>Input Value: {inputValue}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <MemoizedComponent count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default App
