import { bandicoot_t, opt, redux_store } from 'src/types'

export const select_bandicoots = (state: redux_store): opt<bandicoot_t[]> => state.data.bandicoots
