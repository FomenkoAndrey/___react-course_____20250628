import { Action, configureStore, MiddlewareAPI, Dispatch, Middleware } from '@reduxjs/toolkit'
import counterReducer from './reducers'
import { RootState } from './types'

const logger: Middleware = (storeApi: MiddlewareAPI<Dispatch, RootState>) => (next) => (action) => {
  const prevState = storeApi.getState().counter.count
  const result = next(action)
  const nextState = storeApi.getState().counter.count
  console.log(`
    Prev State: ${prevState}
      Dispatch Action: ${(action as Action).type}
        Next State: ${nextState}`)
  return result
}

const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store
