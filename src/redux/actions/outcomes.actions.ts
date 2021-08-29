import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  /**
   * Store
   */
  reduce_your_outcome: ['your_outcome'],
})

export const outcomes_types = Types
export const outcomes_creators = Creators
