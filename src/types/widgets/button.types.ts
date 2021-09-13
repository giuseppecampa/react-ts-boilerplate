type button_flavor =
  | 'primary'
  | 'primary_flip'
  | 'primary_flip_border'
  | 'primary_back'
  | 'primary_next'
  | 'primary_flip_back'
  | 'primary_flip_next'
  | 'primary_flip_back_border'
  | 'primary_flip_next_border'
  //
  | 'accent'
  | 'accent_flip'
  | 'accent_flip_border'
  | 'accent_back'
  | 'accent_next'
  | 'accent_flip_back'
  | 'accent_flip_next'
  | 'accent_flip_back_border'
  | 'accent_flip_next_border'

type type_t = 'button' | 'submit' | 'reset' | undefined

export interface button_t {
  // Logic
  form_id?: string
  disabled?: boolean
  loading?: boolean
  type?: type_t
  on_press?: () => void

  // Style
  text?: string
  flavor?: button_flavor
  iconl?: string
  iconr?: string
  icon_size?: number
  classes?: string
  classes_text?: string
  classes_iconl?: string
  classes_iconr?: string
  classes_loader?: string
}
