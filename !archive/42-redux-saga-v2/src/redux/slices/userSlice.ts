import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface UserState {
  name: string
  isLoading: boolean
}

const initialState: UserState = {
  name: 'John Doe',
  isLoading: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Синхронна дія
    setUsername: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },

    // Тригер для саги (передає payload в сагу)
    setUsernameAsync: (_state, action: PayloadAction<string>) => {
      void action
    },

    // Lifecycle actions для саги
    setUsernamePending: (state) => {
      state.isLoading = true
    },
    setUsernameFulfilled: (state, action: PayloadAction<string>) => {
      state.name = action.payload
      state.isLoading = false
    }
  }
})

export const { setUsername, setUsernameAsync, setUsernamePending, setUsernameFulfilled } = userSlice.actions

export const selectUsername = (state: RootState) => state.user.name
export const selectUserIsLoading = (state: RootState) => state.user.isLoading

export default userSlice.reducer
