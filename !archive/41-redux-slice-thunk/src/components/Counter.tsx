import { useSelector } from 'react-redux'
import { useAppDispatch } from '../redux/store'
import { selectCount, selectIsLoading, incrementAsync, decrementAsync } from '../redux/slices/counterSlice'

const Counter = () => {
  const count = useSelector(selectCount)
  const isLoading = useSelector(selectIsLoading)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>
        Counter: {count} {isLoading && '⏳'}
      </h1>
      <button onClick={() => dispatch(incrementAsync())} disabled={isLoading}>
        Increment
      </button>
      <button onClick={() => dispatch(decrementAsync())} disabled={isLoading}>
        Decrement
      </button>
    </div>
  )
}

export default Counter
