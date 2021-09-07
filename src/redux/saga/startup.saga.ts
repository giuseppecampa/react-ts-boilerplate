import { put } from 'redux-saga/effects'

import { store_creators } from '../actions'

/**
 * Startup
 */
export function* saga_startup(): unknown {
  yield put(store_creators.reduce_started(true))
}
