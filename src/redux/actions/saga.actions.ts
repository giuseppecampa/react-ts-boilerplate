import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Startup saga
  saga_startup: [],

  // Data saga
  saga_resolve_bandicoots: ['args'],

  // Outcomes saga
  saga_create_bandicoot: ['args'],
})

export const saga_types = Types
export const saga_creators = Creators
