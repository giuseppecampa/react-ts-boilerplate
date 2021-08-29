import { lazy } from 'react'

import { TO_INTRO_S1, TO_INTRO_S2, TO_INTRO_S3 } from './'

const IntroS1 = lazy(() => import('src/containers/intro-1/intro-1'))
const IntroS2 = lazy(() => import('src/containers/intro-2/intro-2'))
const IntroS3 = lazy(() => import('src/containers/intro-3/intro-3'))

interface route_t {
  path: string
  component: JSX.Element
}

export const routes: route_t[] = [
  {
    path: TO_INTRO_S1,
    component: <IntroS1 />,
  },
  {
    path: TO_INTRO_S2,
    component: <IntroS2 />,
  },
  {
    path: TO_INTRO_S3,
    component: <IntroS3 />,
  },
]
