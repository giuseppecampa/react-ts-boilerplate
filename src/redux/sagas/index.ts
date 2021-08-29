/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { all, takeLatest } from 'redux-saga/effects'

import * as acts from '../actions'
import * as startup from './startup.saga'

export default function* root() {
  yield all([
    /**
     * What does takeLatest do?
     *    call the 'startup()' saga when a 'STARTUP' action is triggered
     *    takeLatest(acts.startup_types.STARTUP, startup)
     */

    // Startup sagas
    takeLatest(acts.startup_types.SAGA_STARTUP, startup.saga_startup),
  ])
}
