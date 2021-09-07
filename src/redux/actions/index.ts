import { saga_creators } from './saga.actions'
import { store_creators } from './store.actions'

export * from './saga.actions'
export * from './store.actions'

export const shoot = {
  ...store_creators,
  ...saga_creators,
}
