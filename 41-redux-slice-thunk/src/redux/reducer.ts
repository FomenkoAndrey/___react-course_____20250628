import type { Action } from '@reduxjs/toolkit'
import { ActionTypes } from './actionTypes'
import type { CounterState } from './types'

const initialState: CounterState = {
  count: 0
}

const counterReducer = (state: CounterState = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { count: state.count + 1 }
    case ActionTypes.DECREMENT:
      return { count: state.count - 1 }
    default:
      return state
  }
}

export default counterReducer
