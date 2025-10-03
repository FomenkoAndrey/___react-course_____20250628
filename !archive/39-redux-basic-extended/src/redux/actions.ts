import type { Action } from '@reduxjs/toolkit'
import { ActionTypes } from './actionTypes'

// ! Action Creators (дії)
export const increment = (): Action => ({ type: ActionTypes.INCREMENT })
export const decrement = (): Action => ({ type: ActionTypes.DECREMENT })
