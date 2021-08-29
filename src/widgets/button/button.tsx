import './button.scss'

import { FC } from 'react'
import { Image } from 'react-bootstrap'
import { button_t } from 'src/types'
import { join_str } from 'src/utils'

import { flavors } from './button.flavors'

export const Button: FC<button_t> = ({
  form_id,
  disabled,
  type = 'button',
  on_press,
  text,
  flavor = 'primary',
  iconl,
  iconr,
  icon_size = 14,
  classes,
  classes_text = 'font-20',
  classes_iconl = 'mr-3',
  classes_iconr = 'ml-3',
}: button_t) => {
  /**
   * Alias
   */
  const fl = flavors[flavor]
  const iconl_ = iconl || fl?.iconl
  const iconr_ = iconr || fl?.iconr
  const isize_ = {
    height: icon_size,
    width: icon_size,
  }
  const classes_ = {
    button: join_str(classes, fl?.classes),
    text: join_str(classes_text, fl?.classes_text),
    iconl: join_str(classes_iconl, fl?.classes_iconl),
    iconr: join_str(classes_iconr, fl?.classes_iconr),
  }

  /**
   * Render functions
   */
  const render_text = () => <span className={classes_.text}>{text}</span>

  const render_iconl = () => iconl_ && <Image {...isize_} src={iconl_} className={classes_.iconl} />

  const render_iconr = () => iconr_ && <Image {...isize_} src={iconr_} className={classes_.iconr} />

  return (
    <button
      type={type}
      className={classes_.button}
      disabled={disabled}
      onClick={on_press}
      form={form_id}
    >
      {render_iconl()}
      {render_text()}
      {render_iconr()}
    </button>
  )
}
