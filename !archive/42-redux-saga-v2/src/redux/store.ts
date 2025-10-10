import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import counterReducer from './slices/counterSlice'
import userReducer from './slices/userSlice'
import rootSaga from './sagas'
import { logger } from './middlewares'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

// Types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Hooks
export const useAppDispatch = () => useDispatch<AppDispatch>()

// Default export
export default store
