import { FC, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { trash_icon } from 'src/assets'
import { SAGA_GUARDS } from 'src/navigation'
import { shoot } from 'src/redux/actions'
import { select_bandicoots, select_loading } from 'src/redux/store'
import { bandicoot_t } from 'src/types'
import { Button, Loader } from 'src/widgets'

import { bandicoot_config } from './smart-config'

const Intro2: FC = () => {
  /**
   * Use Dispatch
   */
  const dispatch = useDispatch()

  /**
   * Use Selectors
   */
  const loading_rsl = useSelector(select_loading([SAGA_GUARDS.RESOLVE_BANDICOOTS]))
  const loading_rmv = useSelector(select_loading([SAGA_GUARDS.REMOVE_BANDICOOT]))
  const loading_crt = useSelector(select_loading([SAGA_GUARDS.CREATE_BANDICOOT]))
  const bandicoots = useSelector(select_bandicoots)

  /**
   * Use Effect
   */
  useEffect(() => {
    dispatch(shoot.saga_resolve_bandicoots())
  }, [])

  /**
   * Support functions
   */
  const create_bandicoot = (bandicoot: bandicoot_t) => {
    dispatch(shoot.saga_create_bandicoot(bandicoot))
  }

  const remove_bandicoot = (bandicoot_name: string) => {
    dispatch(shoot.saga_remove_bandicoot(bandicoot_name))
  }

  /**
   * Render functions
   */
  const render_bandicoots = () =>
    bandicoots?.map(({ name, good }, idx) => (
      <Row
        key={idx}
        className="mx-1 my-3 px-3 py-2 align-items-center bg-ffffff rounded shadow"
        style={{ width: 200 }}
      >
        <Button
          iconl={trash_icon}
          classes="p-0 bg-transparent c-4e4b4b"
          classes_iconl="filter-grey"
          classes_loader="absolute-center icon-size"
          icon_size={20}
          on_press={() => remove_bandicoot(name)}
        />
        <p className={`m-2 ml-3 font-20 ${good ? 'c-primary' : 'c-accent'}`}>{name}</p>
      </Row>
    ))

  const render_button = ({ name, good }: bandicoot_t) => (
    <Button
      flavor={good ? 'primary' : 'accent'}
      text={`Create ${name?.toUpperCase()}`}
      classes="m-1"
      disabled={!!bandicoots?.find(({ name: n }) => n === name)}
      on_press={() => create_bandicoot({ name, good })}
    />
  )

  const render_button_row = (good?: boolean) => (
    <Row className="m-0">
      {bandicoot_config
        ?.filter(({ good: g }) => (good ? g : !g))
        ?.map((bandicoot, idx) => (
          <div key={idx}>{render_button(bandicoot)}</div>
        ))}
    </Row>
  )

  return (
    <main className="p-3">
      <h1 className="font-32">Bandicoots</h1>
      <h3 className="font-22 c-7f7f7f">Firebase interaction example</h3>

      {loading_rsl ? (
        <Loader />
      ) : (
        <>
          {render_button_row(true)}
          {render_button_row()}
          {render_bandicoots()}
          {(loading_crt || loading_rmv) && <Loader overlay={true} />}
        </>
      )}
    </main>
  )
}

export default Intro2
