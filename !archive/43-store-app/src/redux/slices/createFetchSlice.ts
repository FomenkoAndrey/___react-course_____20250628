import { createFetchThunk } from './createFetchThunk.ts'
import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

interface FetchState<T> {
  data: T[],
  totalCount: number,
  error: null | string,
  isLoading: boolean
}

const createFetchSlice = <T>(name: string, initialState: FetchState<T>) => {
  const fetchThunk = createFetchThunk<T>(`${name}/fetchAll`)

  const slice = createSlice({
    name,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
          .addCase(fetchThunk.pending, (state) => {
            state.isLoading = true
            state.error = null
          })
          .addCase(fetchThunk.fulfilled, (
              state,
              action: PayloadAction<{ data: T[]; totalCount: number }>
          ) => {
            state.isLoading = false
            state.data = action.payload.data as Draft<T>[]
            state.totalCount = action.payload.totalCount
          })
          .addCase(fetchThunk.rejected, (state, action: PayloadAction<unknown>) => {
            state.isLoading = false
            state.error = action.payload instanceof Error ? action.payload.message : 'An error occurred'
          })
    }
  })

  return {
    ...slice,
    fetchThunk
  }
}

export default createFetchSlice
