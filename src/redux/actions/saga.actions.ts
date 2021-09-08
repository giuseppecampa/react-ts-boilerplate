import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Startup saga
  saga_startup: [],

  // Bandicoot saga
  saga_resolve_bandicoots: [],
  saga_create_bandicoot: ['args'],
  saga_remove_bandicoot: ['args'],
})

export const saga_types = Types
export const saga_creators = Creators
