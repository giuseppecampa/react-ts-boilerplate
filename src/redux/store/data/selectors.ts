import { opt, redux_store } from 'src/types'

export const select_your_data = (state: redux_store): opt<string> => state.data.your_data
