import './header.scss'

import { FC } from 'react'
import { header_t } from 'src/types'

import { Drawer } from '../drawer/drawer'

export const Header: FC<header_t> = ({ drawer, classes = 'header flex-fixed' }: header_t) => {
  return (
    <main className={classes}>
      <Drawer {...drawer} />
    </main>
  )
}
