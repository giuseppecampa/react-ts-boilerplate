export interface inputtext_t {
  // Logic
  id: string
  on_change?: (value: string) => void

  // Style
  label?: string
  classes?: string
  classes_input?: string
}
