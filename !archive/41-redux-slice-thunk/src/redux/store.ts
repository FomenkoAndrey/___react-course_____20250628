import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import counterReducer from './slices/counterSlice'
import userReducer from './slices/userSlice'
import { logger } from './middlewares'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

// Types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Hooks
export const useAppDispatch = () => useDispatch<AppDispatch>()

// Default export
export default store
