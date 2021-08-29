import { createReducer } from 'reduxsauce'
import { loadings_store } from 'src/types'

import { loadings_types } from '../../actions'

export const reduce_loading = (
  state: loadings_store,
  args: { loading: boolean; saga_type?: string }
): loadings_store => {
  /**
   * @Replace with your reducing logic
   */
  if (args?.saga_type) {
    return {
      ...state,
      [args?.saga_type || '']: args?.loading,
    }
  }
  return {}
}

export default createReducer(
  {},
  {
    [loadings_types.REDUCE_LOADING]: reduce_loading,
  }
)
