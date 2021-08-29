import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  /**
   * Store
   */
  reduce_loading: ['loading', 'saga_type'],
})

export const loadings_types = Types
export const loadings_creators = Creators
