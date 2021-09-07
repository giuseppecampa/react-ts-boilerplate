import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Startup store
  reduce_started: ['started'],
  reduce_reset: [],

  // Error store
  reduce_error: ['error'],

  // History store
  reduce_history_item: ['key', 'value'],

  // Loadings store
  reduce_loading: ['loading', 'saga_type'],

  // Data store
  reduce_bandicoots: ['bandicoots'],

  // Outcomes store
  reduce_bandicoot_created: ['bandicoot_created'],
})

export const store_types = Types
export const store_creators = Creators
