import type { RootState } from './types'

export const selectCount = (state: RootState) => state.counter.count
