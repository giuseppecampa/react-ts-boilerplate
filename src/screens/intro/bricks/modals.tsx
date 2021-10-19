import { FC, useState } from 'react'
import { Button, Modal } from 'src/widgets'

export const Modals: FC = () => {
  /**
   * Use State
   */
  const [visible_simple, set_visible_simple] = useState(false)
  const [visible_custom, set_visible_custom] = useState(false)

  /**
   * Render methods
   */
  const render_simple = () => (
    <Modal visible={visible_simple} on_close={() => set_visible_simple(false)}>
      <>
        <h1 className="font-24">Simple Modal</h1>
        <p className="mt-3 font-18">{"This is a simple modal with the 'on_close' callback set"}</p>
        <p className="mt-3 font-16 c-7f7f7f">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </>
    </Modal>
  )

  const render_custom = () => (
    <Modal visible={visible_custom}>
      <>
        <h1 className="font-24">Custom Modal</h1>
        <p className="font-18 mt-3">
          {"This is a custom modal with the 'on_close' callback unset"}
        </p>
        <p className="mt-3 font-16 c-7f7f7f">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <div className="d-flex justify-content-end">
          <Button flavor="accent" text="Ok, close" on_press={() => set_visible_custom(false)} />
        </div>
      </>
    </Modal>
  )

  const render_buttons = () => (
    <div className="ml-n2 p-0">
      <Button
        flavor="primary_flip"
        text="Show Simple Modal"
        classes="m-2"
        on_press={() => set_visible_simple(true)}
      />
      <Button
        flavor="primary_flip"
        text="Show Custom Modal"
        classes="m-2"
        on_press={() => set_visible_custom(true)}
      />
    </div>
  )

  return (
    <main className="mx-3">
      <h1 className="mb-3 font-32">Modals</h1>
      {render_simple()}
      {render_custom()}
      {render_buttons()}
    </main>
  )
}
