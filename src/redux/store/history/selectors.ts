import { opt, redux_store } from 'src/types'

export const select_history_item =
  (key: string) =>
  (state: redux_store): opt<string> =>
    state?.history?.items?.[key]
