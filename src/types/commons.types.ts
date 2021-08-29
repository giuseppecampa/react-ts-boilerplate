export type opt<T> = T | undefined
export type dict<T = unknown> = Record<string, T>
export type saga_act<T = dict> = { type: string; args: T }

export interface option_t {
  key: string
  val: string
  order?: number
}
