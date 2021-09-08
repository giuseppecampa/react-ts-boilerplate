import { call, put, select } from 'redux-saga/effects'
import { get_firedoc, set_firedoc } from 'src/firebase'
import { bandicoot_t, saga_act } from 'src/types'

import { store_creators } from '../actions'
import { select_bandicoots } from '../store'

/**
 * Resolve Bandicoots
 */
export function* saga_resolve_bandicoots(): unknown {
  const bandicoots = yield call(get_firedoc, 'bandicoots')
  yield put(store_creators.reduce_bandicoots(bandicoots || []))
}

/**
 * Create Bandicoot
 */
export function* saga_create_bandicoot(action: saga_act<bandicoot_t>): unknown {
  yield call(saga_resolve_bandicoots)
  const bandicoots: bandicoot_t[] = yield select(select_bandicoots) || []
  const new_bandicoots = [...bandicoots, action?.args]
  const outcome = yield call(set_firedoc, 'bandicoots', new_bandicoots)
  if (outcome) {
    yield put(store_creators.reduce_bandicoots(new_bandicoots))
  }
}

/**
 * Remove Bandicoot
 */
export function* saga_remove_bandicoot(action: saga_act<string>): unknown {
  yield call(saga_resolve_bandicoots)
  const bandicoots: bandicoot_t[] = yield select(select_bandicoots) || []
  const new_bandicoots = bandicoots?.filter(({ name }) => name !== action?.args)
  const outcome = yield call(set_firedoc, 'bandicoots', new_bandicoots)
  if (outcome) {
    yield put(store_creators.reduce_bandicoots(new_bandicoots))
  }
}
