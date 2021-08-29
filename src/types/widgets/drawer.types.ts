export interface drawer_t {
  // Logic
  expanded?: boolean

  // Style
  children?: JSX.Element
  classes?: string
  classes_paper?: string
}

export interface drawer_content_t {
  // Style
  classes?: string
  classes_child?: string
}
