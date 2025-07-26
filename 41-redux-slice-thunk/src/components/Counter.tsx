import { useDispatch, useSelector } from 'react-redux'
import { decrementAsync, incrementAsync } from '../redux/actions'
import { selectCount } from '../redux/selectors'
import type { AppDispatch } from '../redux/types'

const Counter = () => {
  const count = useSelector(selectCount)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(incrementAsync())}>Increment</button>
      <button onClick={() => dispatch(decrementAsync())}>Decrement</button>
    </div>
  )
}

export default Counter
