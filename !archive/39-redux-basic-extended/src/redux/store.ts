import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer'

// Store
const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

export default store
