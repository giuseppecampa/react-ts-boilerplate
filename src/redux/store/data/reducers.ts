import { createReducer } from 'reduxsauce'
import { data_store } from 'src/types'

import { store_types } from '../../actions'

export const reduce_bandicoots = (state: data_store, { bandicoots }: data_store): data_store => ({
  ...state,
  bandicoots,
})

export default createReducer(
  {},
  {
    [store_types.REDUCE_BANDICOOTS]: reduce_bandicoots,
  }
)
