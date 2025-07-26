import type { Action, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit'
import store from './store'

export type CounterState = {
  count: number
}

export type AsyncCounterAction = ThunkAction<void, RootState, unknown, Action>

export type AppDispatch = ThunkDispatch<RootState, unknown, Action>

export type RootState = ReturnType<typeof store.getState>
