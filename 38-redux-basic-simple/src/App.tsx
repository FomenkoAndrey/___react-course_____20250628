/* eslint-disable @typescript-eslint/no-explicit-any */

import { configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

// Action types
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

// Action creators (дії)
const increment = () => ({
  type: INCREMENT
})
const decrement = () => ({
  type: DECREMENT
})

// Reducer
const counterReducer = (state = 0, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

// Store
const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

// Component
const Counter = () => {
  const counter = useSelector((state: { counter: number }) => state.counter)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Count: {counter}</h1>
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
