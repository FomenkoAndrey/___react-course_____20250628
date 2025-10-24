import { useReducer } from 'react'

type CounterState = {
  count: number
}

type CounterAction = {
  type: 'increment' | 'decrement' | 'reset'
}

const initialState: CounterState = {
  count: 0
}

const COUNTER_ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset'
} as const

const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case COUNTER_ACTIONS.INCREMENT:
      return { count: state.count + 1 }
    case COUNTER_ACTIONS.DECREMENT:
      return { count: state.count - 1 }
    case COUNTER_ACTIONS.RESET:
      return { count: 0 }
    default:
      return state
  }
}

const CounterWithoutReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState)

  const increment = () => dispatch({ type: COUNTER_ACTIONS.INCREMENT })
  const decrement = () => dispatch({ type: COUNTER_ACTIONS.DECREMENT })
  const reset = () => dispatch({ type: COUNTER_ACTIONS.RESET })

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterWithoutReducer
