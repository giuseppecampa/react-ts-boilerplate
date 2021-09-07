import { call, put } from 'redux-saga/effects'
import { get_branch } from 'src/firebase'
import { saga_act } from 'src/types'

import { store_creators } from '../actions'

/**
 * Resolve Bandicoots
 */
export function* saga_resolve_bandicoots(action: saga_act): unknown {
  const co_name = (action?.args?.co_name as string) || ''
  const do_name = (action?.args?.do_name as string) || ''
  const bandicoots = yield call(get_branch, co_name, do_name, 'bandicoots')
  yield put(store_creators.reduce_bandicoots(bandicoots || []))
}

/**
 * Create Bandicoot
 */
export function* saga_create_bandicoot(action: saga_act): unknown {
  // TODO
  // const co_name = (action?.args?.co_name as string) || ''
  // const do_name = (action?.args?.do_name as string) || ''
  // const bandicoots = yield call(get_branch, co_name, do_name, 'bandicoots')
  // yield put(store_creators.reduce_bandicoots(bandicoots || []))
}
