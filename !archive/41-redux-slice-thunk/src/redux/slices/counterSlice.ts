import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export type CounterState = {
  count: number
  isLoading: boolean
}

const initialState: CounterState = {
  count: 0,
  isLoading: false
}

// Симулює асинхронну операцію з затримкою 1 секунду
const asyncDelay = (value: number): Promise<number> => {
  return new Promise<number>((resolve) => setTimeout(() => resolve(value), 1000))
}

// Асинхронна дія для збільшення лічильника на 1
export const incrementAsync = createAsyncThunk('counter/incrementAsync', async () => asyncDelay(1))

// Асинхронна дія для зменшення лічильника на 1
export const decrementAsync = createAsyncThunk('counter/decrementAsync', async () => asyncDelay(-1))

// Редюсер для встановлення стану завантаження
const setLoadingTrue = (state: CounterState) => {
  state.isLoading = true
}

// Редюсер для оновлення лічильника на основі payload з async thunk
const updateCountByPayload = (state: CounterState, action: { payload: number }) => {
  state.count += action.payload
  state.isLoading = false
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, setLoadingTrue)
      .addCase(incrementAsync.fulfilled, updateCountByPayload)
      .addCase(decrementAsync.pending, setLoadingTrue)
      .addCase(decrementAsync.fulfilled, updateCountByPayload)
  }
})

export const selectCount = (state: RootState) => state.counter.count
export const selectIsLoading = (state: RootState) => state.counter.isLoading

export default counterSlice.reducer
