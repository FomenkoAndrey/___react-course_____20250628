import { useSelector, useDispatch } from 'react-redux'
import type { AppDispatch } from '../redux/types'
import { incrementAsync, decrementAsync } from '../redux/actions'
import { selectCount } from '../redux/selectors'

// ! Component
const Counter = () => {
  const count = useSelector(selectCount)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(incrementAsync())}>Increment</button>
      <button onClick={() => dispatch(decrementAsync())}>Decrement</button>
    </div>
  )
}

export default Counter
