import { FC } from 'react'
import { useHistory } from 'react-router'
import { APP_ENV, APP_VERSION } from 'src/config'
import { route_t, routes } from 'src/navigation/routes'
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
   * Use Selector
   */
  const curr_route = history?.location?.pathname || '/'

  /**
   * Render functions
   */
  const render_route = ({ path, name }: route_t, idx: number) => {
    return (
      <div key={idx}>
        <Button
          text={name}
          classes={`w-100 rounded-0 ${
            path === curr_route ? 'bg-dfdfdf c-7f7f7f' : 'bg-cccccc c-4e4b4b'
          }`}
          on_press={() => {
            if (path !== curr_route) {
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
