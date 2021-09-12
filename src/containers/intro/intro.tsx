import { FC } from 'react'
import { Tabbar } from 'src/widgets'

import { Accordions } from './bricks/accordions'
import { Buttons } from './bricks/buttons'
import { Fonts } from './bricks/fonts'
import { Modals } from './bricks/modals'

const Intro1: FC = () => {
  return (
    <main className="p-3 flex-main">
      <Tabbar
        classes="flex-main flex-fill"
        tabs={[
          { label: 'Fonts', view: <Fonts /> },
          { label: 'Buttons', view: <Buttons /> },
          { label: 'Accordions', view: <Accordions /> },
          { label: 'Modals', view: <Modals /> },
        ]}
      />
    </main>
  )
}

export default Intro1
