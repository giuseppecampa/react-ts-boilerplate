import { opt, redux_store } from 'src/types'

export const select_loading =
  (saga_types?: string[]) =>
  (state: redux_store): opt<boolean> => {
    /**
     * @Replace with your selecting logic
     */
    for (const s_type of saga_types || Object.keys(state?.loadings)) {
      if (state?.loadings[s_type]) {
        return true
      }
    }
    return false
  }
