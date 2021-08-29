import { createReducer } from 'reduxsauce'
import { outcomes_store } from 'src/types'

import { outcomes_types } from '../../actions'

export const reduce_your_outcome = (
  state: outcomes_store,
  { your_outcome }: outcomes_store
): outcomes_store => ({
  ...state,
  your_outcome,
})

export default createReducer(
  {},
  {
    [outcomes_types.REDUCE_YOUR_OUTCOME]: reduce_your_outcome,
  }
)
