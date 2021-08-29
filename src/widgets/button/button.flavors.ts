import { left_icon, right_icon } from 'src/assets'
import { button_t, dict } from 'src/types'

const make_flavors = (base: 'primary' | 'accent'): dict<button_t> => ({
  [base]: {
    classes: base,
  },

  [`${base}_flip`]: {
    classes: `${base} ${base}-flip`,
  },
  [`${base}_flip_border`]: {
    classes: `${base} ${base}-flip-border`,
  },

  [`${base}_back`]: {
    classes: base,
    classes_iconl: 'filter-white',
    iconl: left_icon,
  },
  [`${base}_next`]: {
    classes: base,
    classes_iconr: 'filter-white',
    iconr: right_icon,
  },

  [`${base}_flip_back`]: {
    classes: `${base} ${base}-flip`,
    classes_iconl: `filter-${base}`,
    iconl: left_icon,
  },
  [`${base}_flip_next`]: {
    classes: `${base} ${base}-flip`,
    classes_iconr: `filter-${base}`,
    iconr: right_icon,
  },

  [`${base}_flip_back_border`]: {
    classes: `${base} ${base}-flip-border`,
    classes_iconl: `filter-${base}`,
    iconl: left_icon,
  },
  [`${base}_flip_next_border`]: {
    classes: `${base} ${base}-flip-border`,
    classes_iconr: `filter-${base}`,
    iconr: right_icon,
  },
})

export const flavors: dict<button_t> = {
  ...make_flavors('primary'),
  ...make_flavors('accent'),
}
