import { opt, redux_store } from 'src/types'

export const select_your_outcome = (state: redux_store): opt<string> => state.outcomes.your_outcome
