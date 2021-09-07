import { opt, redux_store } from 'src/types'

export const select_bandicoot_created = (state: redux_store): opt<boolean> =>
  state.outcomes.bandicoot_created
