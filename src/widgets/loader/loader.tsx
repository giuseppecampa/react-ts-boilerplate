import { FC } from 'react'
import { Spinner } from 'react-bootstrap'
import { loader_t } from 'src/types'

import { Modal } from '../'

export const Loader: FC<loader_t> = ({ classes, overlay }: loader_t) => {
  /**
   * Render functions
   */
  const render_spinner = () => <Spinner animation="border" role="status" className={classes} />

  return overlay ? (
    <Modal visible={true} classes_main="p-4 bg-ffffff shadow border-100">
      {render_spinner()}
    </Modal>
  ) : (
    render_spinner()
  )
}
