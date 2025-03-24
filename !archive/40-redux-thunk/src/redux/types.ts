import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { Action } from '@reduxjs/toolkit'

import store from './store'

export type CounterState = {
  count: number
}

export type AsyncCounterAction = ThunkAction<void, CounterState, unknown, Action>
export type AppDispatch = ThunkDispatch<CounterState, unknown, Action>
export type RootState = ReturnType<typeof store.getState>
