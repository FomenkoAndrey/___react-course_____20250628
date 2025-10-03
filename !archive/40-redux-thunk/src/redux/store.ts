import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer'
import { logger } from './middlewares'

const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store
