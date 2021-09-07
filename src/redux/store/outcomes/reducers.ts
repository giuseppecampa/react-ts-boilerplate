import { createReducer } from 'reduxsauce'
import { outcomes_store } from 'src/types'

import { store_types } from '../../actions'

export const reduce_bandicoot_created = (
  state: outcomes_store,
  { bandicoot_created }: outcomes_store
): outcomes_store => ({
  ...state,
  bandicoot_created,
})

export default createReducer(
  {},
  {
    [store_types.REDUCE_BANDICOOT_CREATED]: reduce_bandicoot_created,
  }
)
