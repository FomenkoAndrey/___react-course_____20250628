import type { CounterState } from './types'
import type { Action } from '@reduxjs/toolkit'
import { ActionTypes } from './actionTypes'

const initialState: CounterState = {
  count: 0
}

// ! Reducer (обробник дій)
function counterReducer(
  state: CounterState = initialState,
  action: Action
): CounterState {
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
