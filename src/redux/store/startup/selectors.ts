/**
 * Selectors let us factorize logic that queries the state and
 * can be used in sagas or components to avoid duplicating that logic.
 */

import { redux_store } from 'src/types'

export const select_started = (state: redux_store): boolean => state.startup.started
