import { createReducer } from 'reduxsauce'
import { data_store } from 'src/types'

import { data_types } from '../../actions'

export const reduce_your_data = (state: data_store, { your_data }: data_store): data_store => ({
  ...state,
  your_data,
})

export default createReducer(
  {},
  {
    [data_types.REDUCE_YOUR_DATA]: reduce_your_data,
  }
)
