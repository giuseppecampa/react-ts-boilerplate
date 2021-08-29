export interface accordion_t {
  // Logic
  default_expanded?: boolean
  on_toggle?: (expanded: boolean) => void

  // Style
  fixed_child?: JSX.Element
  label_child?: JSX.Element
  label?: string
  children?: JSX.Element
  classes?: string
  classes_fixed?: string
  classes_label?: string
  classes_icon?: string
  isize?: number
}
