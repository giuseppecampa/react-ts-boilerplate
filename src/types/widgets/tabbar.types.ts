export interface tab_t {
  label: string
  view: JSX.Element
}

export interface tabbar_t {
  // Logic
  tabs: tab_t[]

  // Style
  classes?: string
  classes_tabs?: string
  classes_views?: string
  classes_label?: string
  classes_label_active?: string
  classes_label_indicator?: string
}
