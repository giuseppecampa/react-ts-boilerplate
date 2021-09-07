import { createReducer } from 'reduxsauce'
import { history_store } from 'src/types'

import { store_types } from '../../actions'

export const reduce_history_item = (
  state: history_store,
  args: { key: string; value?: string }
): history_store => ({
  ...state,
  [args.key]: args.value || '',
})

export default createReducer(
  {},
  {
    [store_types.REDUCE_HISTORY_ITEM]: reduce_history_item,
  }
)
