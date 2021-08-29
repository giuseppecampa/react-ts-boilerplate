import moment from 'moment'
import { opt, option_t } from 'src/types'

export const is_sm = window.innerWidth >= 576
export const is_md = window.innerWidth >= 768
export const is_lg = window.innerWidth >= 992
export const is_xl = window.innerWidth >= 1200

export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const is_valorized = (value: unknown): boolean => {
  return value !== null && value !== undefined
}

export const is_obj_empty = (value: unknown): boolean => {
  return JSON.stringify(value) === '{}'
}

export const is_obj_full = (value: unknown): boolean => {
  return !!value && JSON.stringify(value) !== '{}'
}

export const deep_copy = <T>(item: T): T => {
  return JSON.parse(JSON.stringify(item))
}

export const deep_cmp = <T>(item_1: T, item_2: T): boolean => {
  return JSON.stringify(item_1) === JSON.stringify(item_2)
}

export const insensitive_substr = (str: string, substr: string): boolean => {
  return !!str?.toLowerCase()?.includes(substr?.toLowerCase())
}

export const insensitive_compare = (s1: string, s2: string): boolean => {
  return s1?.toLowerCase() === s2?.toLowerCase()
}

export const insensitive_include = (strs: string[], str: string): boolean => {
  return !!strs?.find((s) => insensitive_compare(s, str))
}

export const find_option = (options?: option_t[], key?: string): opt<option_t> => {
  return options?.find((o) => o?.key === key)
}

export const compare_dates = (d1?: Date, d2?: Date): number => {
  if (!d1 || !d2 || isNaN(d1?.getTime()) || isNaN(d2?.getTime())) {
    return -2
  }
  if (moment(d1).format('DD/MM/YYYY') === moment(d2).format('DD/MM/YYYY')) {
    return 0
  }
  return d1 < d2 ? -1 : 1
}
