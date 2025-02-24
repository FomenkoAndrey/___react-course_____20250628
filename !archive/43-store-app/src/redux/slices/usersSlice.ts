import { UserInterface } from '../../types/User.interface'
import createFetchSlice from './createFetchSlice.ts'
import { RootState } from '../store.ts'

const initialState = {
  data: [] as UserInterface[],
  totalCount: 0,
  error: null,
  isLoading: false
}

const usersSlice = createFetchSlice<UserInterface>('users', initialState)

export const fetchAllUsers = usersSlice.fetchThunk
export const selectUsers = (state: RootState) => state.users.data
export const selectUsersLoading = (state: RootState) => state.users.isLoading
export const selectUsersError = (state: RootState) => state.users.error

export default usersSlice.reducer
