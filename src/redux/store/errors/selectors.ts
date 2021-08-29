import { error_t, opt, redux_store } from 'src/types'

export const select_error =
  (saga_type?: string) =>
  (state: redux_store): opt<error_t> => {
    /**
     * @Replace with your selecting logic
     */
    for (const code in state?.errors) {
      if (saga_type) {
        if (state?.errors?.[code]?.saga_type === saga_type) {
          return state?.errors?.[code]
        }
      } else {
        return state?.errors?.[code]
      }
    }
    return undefined
  }
