import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  /**
   * Store
   */
  reduce_your_data: ['your_data'],
})

export const data_types = Types
export const data_creators = Creators
