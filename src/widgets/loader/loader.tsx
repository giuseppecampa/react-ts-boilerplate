import { FC } from 'react'
import { Spinner } from 'react-bootstrap'
import { loader_t } from 'src/types'

export const Loader: FC<loader_t> = ({ classes }: loader_t) => {
  return <Spinner animation="border" role="status" className={classes} />
}
