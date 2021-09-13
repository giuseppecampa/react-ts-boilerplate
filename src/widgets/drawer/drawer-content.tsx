import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { APP_ENV, APP_VERSION } from 'src/config'
import { route_t, routes } from 'src/navigation/routes'
import { shoot } from 'src/redux/actions'
import { select_history_item } from 'src/redux/store'
import { drawer_content_t } from 'src/types'

import { Button } from '../'

export const DrawerContent: FC<drawer_content_t> = ({
  classes = 'h-100',
  classes_child = 'bg-cccccc h-100 flex-scaffold',
}: drawer_content_t) => {
  /**
   * Use History
   */
  const history = useHistory()

  /**
   * Use Dispatch
   */
  const dispatch = useDispatch()

  /**
   * Use Selector
   */
  const curr_route = useSelector(select_history_item('current-route')) || '0'

  /**
   * Render functions
   */
  const render_route = ({ path, name }: route_t, idx: number) => {
    const idx_str = `${idx}`
    return (
      <div key={idx}>
        <Button
          text={name}
          classes={`w-100 rounded-0 ${
            idx_str === curr_route ? 'bg-dfdfdf c-7f7f7f' : 'bg-cccccc c-4e4b4b'
          }`}
          on_press={() => {
            dispatch(shoot.reduce_history_item('current-route', idx_str))

            if (idx_str !== curr_route) {
              history.push(path)
            }
          }}
        />
        <hr className="m-0 p-0 bg-cccccc" />
      </div>
    )
  }

  return (
    <main className={classes}>
      <div className={classes_child}>
        <div className="flex-fill">{routes?.map(render_route)}</div>
        <p className="text-center">{`${APP_ENV} - ${APP_VERSION}`}</p>
      </div>
    </main>
  )
}
