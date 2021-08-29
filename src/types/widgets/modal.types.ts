export interface modal_t {
  // Logic
  visible?: boolean
  on_close?: () => void

  // Style
  children?: JSX.Element
  classes_body?: string
  classes_main?: string
  classes?: string
}
