import { data_creators } from './data.actions'
import { errors_creators } from './errors.actions'
import { history_creators } from './history.actions'
import { loadings_creators } from './loadings.actions'
import { outcomes_creators } from './outcomes.actions'
import { startup_creators } from './startup.actions'

export * from './data.actions'
export * from './errors.actions'
export * from './history.actions'
export * from './loadings.actions'
export * from './outcomes.actions'
export * from './startup.actions'

export const shoot = {
  ...startup_creators,
  ...errors_creators,
  ...loadings_creators,
  ...data_creators,
  ...history_creators,
  ...outcomes_creators,
}
