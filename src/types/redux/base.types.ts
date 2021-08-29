import { data_store } from './data.types'
import { errors_store } from './errors.types'
import { history_store } from './history.types'
import { loadings_store } from './loadings.types'
import { outcomes_store } from './outcomes.types'
import { startup_store } from './startup.types'

export interface redux_store {
  startup: startup_store
  loadings: loadings_store
  errors: errors_store
  data: data_store
  outcomes: outcomes_store
  history: history_store
}
