import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  /**
   * Store
   */
  reduce_history_item: ['key', 'value'],
})

export const history_types = Types
export const history_creators = Creators
