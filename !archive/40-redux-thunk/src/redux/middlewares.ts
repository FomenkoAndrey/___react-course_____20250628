import type { Middleware, MiddlewareAPI, Dispatch, Action } from '@reduxjs/toolkit'
import type { RootState } from './types'

export const logger: Middleware = (store: MiddlewareAPI<Dispatch, RootState>) => (next) => (action) => {
  const prevState = store.getState().counter.count
  const result = next(action)
  const nextState = store.getState().counter.count
  console.log(`
    Prev state: ${prevState}
      Dispatched action: ${(action as Action).type}
        Next state: ${nextState}
  `)
  return result
}
