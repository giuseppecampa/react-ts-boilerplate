import { FC } from 'react'
import { useHistory } from 'react-router'
import { TO_INTRO_S2 } from 'src/navigation'
import { Button, Tabbar } from 'src/widgets'

import { Accordions } from './bricks/accordions'
import { Buttons } from './bricks/buttons'
import { Fonts } from './bricks/fonts'
import { Modals } from './bricks/modals'

const Intro1: FC = () => {
  const history = useHistory()
  return (
    <main>
      <Tabbar
        classes="m-2 vh75 d-flex flex-column"
        tabs={[
          { label: 'Fonts', view: <Fonts /> },
          { label: 'Buttons', view: <Buttons /> },
          { label: 'Accordions', view: <Accordions /> },
          { label: 'Modals', view: <Modals /> },
        ]}
      />
      <Button
        flavor="primary_next"
        text="To Intro 2"
        classes="ml-3"
        on_press={() => history.push(TO_INTRO_S2)}
      />
    </main>
  )
}

export default Intro1
