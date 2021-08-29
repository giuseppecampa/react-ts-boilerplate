import { createActions } from 'reduxsauce'

/**
 * We use reduxsauce's `createActions()` helper to easily create redux actions.
 *
 * Keys are action names and values are the list of parameters for the given action.
 *
 * Action names are turned to SNAKE_CASE into the `Types` variable. This can be used
 * to listen to actions:
 *
 * - to trigger reducers to update the state
 * - to trigger sagas
 *
 * Actions can be dispatched:
 *
 * - in React components using `dispatch(...)`
 * - in sagas using `yield put(...)`
 *
 * @see https://github.com/infinitered/reduxsauce#createactions
 */

const { Types, Creators } = createActions({
  /**
   * Store
   */
  reduce_started: ['started'],
  reduce_reset: [],

  /**
   * Sagas
   */
  saga_startup: [],
})

export const startup_types = Types
export const startup_creators = Creators
