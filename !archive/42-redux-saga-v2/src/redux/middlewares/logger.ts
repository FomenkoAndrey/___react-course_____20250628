import type { Middleware, Action } from '@reduxjs/toolkit'

export const logger: Middleware = (store) => (next) => (action) => {
  const state = store.getState() as { counter: { count: number } }
  const prevState = state.counter.count
  const result = next(action)
  const nextState = (store.getState() as { counter: { count: number } }).counter.count
  console.log(`
    Prev state: ${prevState}
      Dispatched action: ${(action as Action).type}
        Next state: ${nextState}
  `)
  return result
}
