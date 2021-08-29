import { dict } from '../commons.types'

/**
 * @Replace with your interfaces
 */

/**
 * Interfaces adopted by BE
 */
export interface raw_response<T> {
  data: dict<T>
}

export interface raw_error {
  response: {
    data: {
      status?: string
      code?: string
      message?: string
    }
    status: number
  }
}

/**
 * Interfaces adopted by FE
 */
export interface error_t {
  status?: string
  code?: string
  description_be?: string
  description_fe?: string
  saga_type?: string
}

export interface response_t<T> {
  data?: T
  error?: error_t
}
