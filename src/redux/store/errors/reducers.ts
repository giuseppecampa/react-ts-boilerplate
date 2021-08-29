import { createReducer } from 'reduxsauce'
import { errors_store } from 'src/types'

import { errors_types } from '../../actions'

export const reduce_error = (state: errors_store, { error }: errors_store): errors_store => {
  /**
   * @Replace with your reducing logic
   */
  if (error) {
    return {
      ...state,
      [error?.code || '']: error,
    }
  }
  return {}
}

export default createReducer(
  {},
  {
    [errors_types.REDUCE_ERROR]: reduce_error,
  }
)
