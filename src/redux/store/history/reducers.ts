import { createReducer } from 'reduxsauce'
import { history_store } from 'src/types'

import { history_types } from '../../actions'

export const reduce_history_item = (
  state: history_store,
  args: { key: string; value?: string }
): history_store => ({
  ...state,
  items: {
    ...state?.items,
    [args.key]: args.value || '',
  },
})

export default createReducer(
  {},
  {
    [history_types.REDUCE_HISTORY_ITEM]: reduce_history_item,
  }
)
