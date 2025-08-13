import { memo, useState } from 'react'
import NonMemoComponent from './components/NonMemoComponent'

const MemoizedComponent = memo(NonMemoComponent)

const App = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  return (
    <div>
      <h1>Text: {text}</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <hr />
      {/* <NonMemoComponent count={count} /> */}
      <MemoizedComponent count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default App
