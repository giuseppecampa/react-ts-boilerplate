import { put } from 'redux-saga/effects'

import { startup_creators } from '../actions'

/**
 * Startup
 */
export function* saga_startup(): unknown {
  yield put(startup_creators.reduce_started(true))
}
