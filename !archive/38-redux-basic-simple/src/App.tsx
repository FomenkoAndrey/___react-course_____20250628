import { configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

// ! Action Types (типи дій)
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

// ! Action Creators (дії)
const increment = () => ({ type: INCREMENT })
const decrement = () => ({ type: DECREMENT })

// ! Reducer (обробник дій)
const counterReducer = (state = 0, action: { type: string }) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

// ! Store (сховище)
const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

// ! Component
const Counter = () => {
  const count = useSelector((state: { counter: number }) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default App
