import { lazy } from 'react'

import { TO_ALIGNS, TO_FIREBASE, TO_INTRO, TO_ROADMAP } from './'

const Aligns = lazy(() => import('src/screens/aligns/aligns'))
const Intro = lazy(() => import('src/screens/intro/intro'))
const Firebase = lazy(() => import('src/screens/firebase/firebase'))
const Roadmap = lazy(() => import('src/screens/roadmap/roadmap'))

export interface route_t {
  path: string
  name: string
  component: JSX.Element
}

export const routes: route_t[] = [
  {
    path: TO_INTRO,
    name: 'Intro',
    component: <Intro />,
  },
  {
    path: TO_FIREBASE,
    name: 'Firebase',
    component: <Firebase />,
  },
  {
    path: TO_ALIGNS,
    name: 'Alignments',
    component: <Aligns />,
  },
  {
    path: TO_ROADMAP,
    name: 'Roadmap',
    component: <Roadmap />,
  },
]
