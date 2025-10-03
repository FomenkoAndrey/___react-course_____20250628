import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/actions'
import type { RootState } from '../redux/types'

// ! Component
const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter
