import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer'

// ! Store (сховище)
const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

export default store
