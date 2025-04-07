import { memo, useState } from 'react'
import NonMemoComponent from './components/NonMemoComponent'

const MemoComponent = memo(NonMemoComponent)

const App = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  return (
    <div>
      {/* <NonMemoComponent count={count} /> */}
      <MemoComponent count={count} />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default App
