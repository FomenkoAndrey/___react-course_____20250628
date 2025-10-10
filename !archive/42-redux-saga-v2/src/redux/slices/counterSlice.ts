import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export type CounterState = {
  count: number
  isLoading: boolean
}

const initialState: CounterState = {
  count: 0,
  isLoading: false
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Синхронні дії
    increment: (state: CounterState, action: PayloadAction<number>) => {
      state.count += action.payload
    },
    decrement: (state: CounterState, action: PayloadAction<number>) => {
      state.count -= action.payload
    },

    // Тригери для саг (не змінюють стан)
    incrementAsync: () => {},
    decrementAsync: () => {},

    // Lifecycle actions для саг
    incrementPending: (state: CounterState) => {
      state.isLoading = true
    },
    incrementFulfilled: (state: CounterState, action: PayloadAction<number>) => {
      state.count += action.payload
      state.isLoading = false
    },
    decrementPending: (state: CounterState) => {
      state.isLoading = true
    },
    decrementFulfilled: (state: CounterState, action: PayloadAction<number>) => {
      state.count -= action.payload
      state.isLoading = false
    }
  }
})

export const {
  increment,
  decrement,
  incrementAsync,
  decrementAsync,
  incrementPending,
  incrementFulfilled,
  decrementPending,
  decrementFulfilled
} = counterSlice.actions
export const selectCount = (state: RootState) => state.counter.count
export const selectIsLoading = (state: RootState) => state.counter.isLoading

export default counterSlice.reducer
