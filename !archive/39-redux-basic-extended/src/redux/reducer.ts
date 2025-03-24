import { ActionTypes } from './actionTypes'
import { CounterState } from './types'
import { Action } from '@reduxjs/toolkit'

const initialState: CounterState = {
  count: 0
}

// Reducer
const counterReducer = (
  state: CounterState = initialState,
  action: Action
): CounterState => {
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
