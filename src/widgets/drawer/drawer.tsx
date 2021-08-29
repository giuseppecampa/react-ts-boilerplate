import Hamburger from 'hamburger-react'
import { FC, useState } from 'react'
import { drawer_t } from 'src/types'

import { Drawer as MDrawer } from '@material-ui/core'

import { DrawerContent } from './drawer-content'

export const Drawer: FC<drawer_t> = ({
  expanded: exp,
  children = <DrawerContent />,
  classes = 'd-lg-none',
  classes_paper = 'col-xl-3 col-md-5 col-sm-6 col-10 p-0',
}: drawer_t) => {
  /**
   * Use State
   */
  const [expanded, set_expanded] = useState(exp)

  /**
   * Render functions
   */
  const render_hamburger = () => (
    <Hamburger onToggle={() => set_expanded(true)} toggled={expanded} />
  )

  const render_drawer = () => (
    <MDrawer open={expanded} onClose={() => set_expanded(false)} classes={{ paper: classes_paper }}>
      {children}
    </MDrawer>
  )
  return (
    <main className={classes}>
      {render_hamburger()}
      {render_drawer()}
    </main>
  )
}
