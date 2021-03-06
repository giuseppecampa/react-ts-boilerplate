import { FC, useState } from 'react'
import { Row } from 'react-bootstrap'
import { done_icon } from 'src/assets'
import { Button } from 'src/widgets'

export const Buttons: FC = () => {
  /**
   * Use State
   */
  const [loading, set_loading] = useState(false)

  /**
   * Render functions
   */
  const render_buttons = () => (
    <Row className="m-0 ml-n2 mt-n2">
      <Button flavor="primary" text="primary" classes="m-2" />
      <Button flavor="primary_flip" text="primary flip" classes="m-2" />
      <Button flavor="primary_flip_border" text="primary flip border" classes="m-2" />
      <Button flavor="primary_back" text="primary back" classes="m-2" />
      <Button flavor="primary_next" text="primary next" classes="m-2" />
      <Button flavor="primary_flip_back" text="primary flip back" classes="m-2" />
      <Button flavor="primary_flip_next" text="primary flip next" classes="m-2" />
      <Button flavor="primary_flip_back_border" text="primary flip back border" classes="m-2" />
      <Button flavor="primary_flip_next_border" text="primary flip next border" classes="m-2" />
      <Button flavor="accent" text="accent" classes="m-2" />
      <Button flavor="accent_flip" text="accent flip" classes="m-2" />
      <Button flavor="accent_flip_border" text="accent flip border" classes="m-2" />
      <Button flavor="accent_back" text="accent back" classes="m-2" />
      <Button disabled={true} flavor="primary" text="primary disabled" classes="m-2" />
      <Button disabled={true} flavor="primary_flip" text="primary flip disabled" classes="m-2" />
      <Button
        flavor="primary_back"
        text="primary custom icon"
        classes="m-2"
        iconl={done_icon}
        classes_iconl="mr-3 filter-ffffff"
      />
    </Row>
  )

  const render_loading_buttons = () => (
    <Row className="m-0 ml-n2 mt-n2">
      <Button
        flavor="primary"
        text={loading ? 'End loading' : 'Start loading'}
        classes="m-2"
        on_press={() => set_loading(!loading)}
      />
      <Button flavor="primary" text="Do something" classes="m-2" loading={loading} />
    </Row>
  )

  return (
    <main className="mx-3">
      <h1 className="mb-3 font-32">Buttons</h1>
      {render_buttons()}

      <h1 className="my-3 font-32">Loading Buttons</h1>
      {render_loading_buttons()}
    </main>
  )
}
