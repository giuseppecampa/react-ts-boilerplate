/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { all, takeLatest } from 'redux-saga/effects'

import * as acts from '../actions'
import * as bandicoot from './bandicoot.saga'
import * as startup from './startup.saga'

export default function* root() {
  yield all([
    /**
     * What does takeLatest do?
     *    call the 'startup()' saga when a 'STARTUP' action is triggered
     *    takeLatest(acts.startup_types.STARTUP, startup)
     */

    // Startup sagas
    takeLatest(acts.saga_types.SAGA_STARTUP, startup.saga_startup),

    // Bandicoot sagas
    takeLatest(acts.saga_types.SAGA_RESOLVE_BANDICOOTS, bandicoot.saga_resolve_bandicoots),
    takeLatest(acts.saga_types.SAGA_CREATE_BANDICOOT, bandicoot.saga_create_bandicoot),
  ])
}
