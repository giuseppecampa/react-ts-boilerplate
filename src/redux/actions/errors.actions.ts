import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  /**
   * Store
   */
  reduce_error: ['error'],
})

export const errors_types = Types
export const errors_creators = Creators
