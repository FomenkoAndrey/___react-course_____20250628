/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

// 1. Action Types (типи дій)
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

// 2. Action Creators (дії)
const increment = () => ({ type: INCREMENT })
const decrement = () => ({ type: DECREMENT })

// 3. Reducer (функція, яка приймає state і action і повертає новий state)
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

// 4. Store (сховище)
const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

const Counter = () => {
  const count = useSelector((state: { counter: number }) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Count: {count}</h1>
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
