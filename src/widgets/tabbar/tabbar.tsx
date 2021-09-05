import './tabbar.scss'

import { FC, useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { tab_t, tabbar_t } from 'src/types'
import { join_str } from 'src/utils'

import { Tab, Tabs } from '@material-ui/core/index'

export const Tabbar: FC<tabbar_t> = ({
  tabs,
  classes,
  classes_tabs = 'mb-5 bg-ffffff width-fit-content shadow',
  classes_views = 'flex-fill',
  classes_label = 'font-16 text-capitalize',
  classes_label_active = 'c-accent',
  classes_label_indicator = 'bg-accent-',
}: tabbar_t) => {
  /**
   * Use State
   */
  const [currtab, set_currtab] = useState(0)

  /**
   * Render functions
   */
  const render_tab = (tab: tab_t, idx: number) => (
    <Tab
      key={idx}
      tabIndex={currtab === idx ? 0 : -1}
      label={
        <span className={join_str(classes_label, currtab === idx ? classes_label_active : '')}>
          {tab?.label}
        </span>
      }
    />
  )

  const render_tabs = () => (
    <Tabs
      value={currtab}
      onChange={(_, idx) => set_currtab(idx)}
      className={classes_tabs}
      classes={{ indicator: classes_label_indicator }}
    >
      {tabs?.map(render_tab)}
    </Tabs>
  )

  const render_view = (tab: tab_t, idx: number) => (
    <div key={idx} className={idx === currtab ? '' : 'd-none'}>
      {tab?.view}
    </div>
  )

  const render_views = () => (
    <SwipeableViews
      index={currtab}
      onChangeIndex={set_currtab}
      enableMouseEvents={true}
      className={classes_views}
      containerStyle={{ transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1)' }}
    >
      {tabs.map(render_view)}
    </SwipeableViews>
  )

  return (
    <main className={classes}>
      {render_tabs()}
      {render_views()}
    </main>
  )
}
