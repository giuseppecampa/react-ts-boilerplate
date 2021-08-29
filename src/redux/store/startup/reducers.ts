/**
 * Reducers specify how the application's state changes in response
 * to actions sent to the store.
 */

import { createReducer } from 'reduxsauce'
import { startup_store } from 'src/types'

import { startup_types } from '../../actions'
import INITIAL_STATE from './initial-state'

export const reduce_started = (
  state: startup_store,
  { started }: startup_store
): startup_store => ({
  ...state,
  started,
})

export default createReducer(INITIAL_STATE, {
  [startup_types.REDUCE_STARTED]: reduce_started,
})
