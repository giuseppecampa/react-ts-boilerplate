import './modal.scss'

import { FC } from 'react'
import { Image, Modal as RBModal } from 'react-bootstrap'
import { close_icon } from 'src/assets'
import { modal_t } from 'src/types'

export const Modal: FC<modal_t> = ({
  visible,
  on_close,
  children,
  classes_body = 'modal-child',
  classes_main = 'col-xl-6 col-lg-9 col-sm-10 col-11 p-3 bg-ffffff rounded shadow',
  classes,
}: modal_t) => {
  /**
   * Render methods
   */
  const render_close = () =>
    on_close && (
      <div className="mb-3 d-flex justify-content-end">
        <Image src={close_icon} onClick={on_close} className="cursor-pointer filter-grey" />
      </div>
    )

  const render_child = () => <section className={classes}>{children}</section>

  return (
    <RBModal onHide={() => undefined} show={visible} animation={false}>
      <RBModal.Body className={classes_body}>
        <main className={classes_main}>
          {render_close()}
          {render_child()}
        </main>
      </RBModal.Body>
    </RBModal>
  )
}
