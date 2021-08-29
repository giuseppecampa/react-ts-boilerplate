import './accordion.scss'

import { FC, useState } from 'react'
import { Collapse, Image, Row } from 'react-bootstrap'
import { plus_icon } from 'src/assets'
import { accordion_t } from 'src/types'
import { join_str } from 'src/utils'

export const Accordion: FC<accordion_t> = ({
  default_expanded = false,
  on_toggle,
  fixed_child,
  label_child,
  label,
  children,
  classes,
  classes_fixed = 'm-0 p-0 align-items-center cursor-pointer',
  classes_label = 'm-0 p-0 ml-1 font-20',
  classes_icon = 'accordion-icon',
  isize = 20,
}: accordion_t) => {
  /**
   * Use State
   */
  const [expanded, set_expanded] = useState(default_expanded)

  /**
   * Alias
   */
  const classes_ = {
    fixed: classes_fixed,
    icon: join_str(expanded ? 'accordion-rotate' : '', classes_icon),
    label: classes_label,
  }

  /**
   * Support functions
   */
  const on_toggle_ = () => {
    on_toggle?.(!expanded)
    set_expanded(!expanded)
  }

  /**
   * Render functions
   */
  const render_label = () => label_child || <p className={classes_.label}>{label}</p>

  const render_icon = () => (
    <Image src={plus_icon} height={isize} width={isize} className={classes_.icon} />
  )

  const render_fixed = () => (
    <Row className={classes_.fixed} onClick={on_toggle_}>
      {fixed_child || (
        <>
          {render_icon()}
          {render_label()}
        </>
      )}
    </Row>
  )

  const render_collapsible = () => (
    <Collapse in={expanded}>
      <div className="m-0 p-0">{children}</div>
    </Collapse>
  )

  return (
    <main className={classes}>
      {render_fixed()}
      {render_collapsible()}
    </main>
  )
}
