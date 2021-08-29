/* eslint-disable @typescript-eslint/no-explicit-any */

import { Reducer } from 'react'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'
import createSagaMiddleware, { Saga } from 'redux-saga'
import { saga_act } from 'src/types'

import { applyMiddleware, combineReducers, compose, createStore } from 'redux'

import root_saga from '../sagas'
import data_reducers from './data/reducers'
import errors_reducers from './errors/reducers'
import history_reducers from './history/reducers'
import loadings_reducers from './loadings/reducers'
import startup_reducers from './startup/reducers'

const configure_store = (root_reducer: Reducer<unknown, any>, root_saga_: Saga<any[]>) => {
  const middleware = []
  const enhancers = []

  // Connect the sagas to the redux store
  const saga_middleware = createSagaMiddleware()
  middleware.push(saga_middleware)
  enhancers.push(applyMiddleware(...middleware))

  // Redux persist
  const persistent_reducer = persistReducer(
    {
      key: 'root',
      storage,
      blacklist: [], // "blacklist" array contains not persistent states
    },
    root_reducer
  )
  const store = createStore(persistent_reducer, compose(...enhancers))
  const persistor = persistStore(store)

  // Kick off the root saga
  saga_middleware.run(root_saga_)

  return { store, persistor }
}

export default (): any => {
  const app_reducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    startup: startup_reducers,
    loadings: loadings_reducers,
    errors: errors_reducers,
    data: data_reducers,
    history: history_reducers,
  })
  const root_reducer = (state: any, action: saga_act) => {
    if (action?.type === 'REDUCE_RESET') {
      state = undefined
    }
    return app_reducer(state, action)
  }

  return configure_store(root_reducer, root_saga)
}
