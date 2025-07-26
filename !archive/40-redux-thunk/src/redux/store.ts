import { configureStore, type Action, type Dispatch, type Middleware, type MiddlewareAPI } from '@reduxjs/toolkit'
import counterReducer from './reducer'
import type { RootState } from './types'

const logger: Middleware = (storeApi: MiddlewareAPI<Dispatch, RootState>) => (next) => (action) => {
  const prevState = storeApi.getState().counter.count
  const result = next(action)
  const nextState = storeApi.getState().counter.count
  console.log(`
    Prev state: ${prevState}
        Dispatch action: ${(action as Action).type}
            Next state: ${nextState}
    `)
  return result
}

const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store
