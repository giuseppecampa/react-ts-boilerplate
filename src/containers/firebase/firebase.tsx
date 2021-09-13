import { FC, useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { trash_icon } from 'src/assets'
import { SAGA_GUARDS } from 'src/navigation'
import { shoot } from 'src/redux/actions'
import { select_bandicoots, select_loading } from 'src/redux/store'
import { bandicoot_t, dict } from 'src/types'
import { is_obj_empty } from 'src/utils'
import { Button, Loader } from 'src/widgets'

import { bandicoot_config } from './smart-config'

interface progress_t {
  disabled?: boolean
  loading_create?: boolean
  loading_remove?: boolean
}

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
   * Use State
   */
  const [progresses, set_progresses] = useState<dict<progress_t>>({})
  const [curr_bandicoot_name, set_curr_bandicoot_name] = useState('')

  /**
   * Use Effect
   */
  useEffect(() => {
    dispatch(shoot.saga_resolve_bandicoots())
  }, [])

  useEffect(() => {
    init_progresses()
  }, [bandicoots, progresses])

  useEffect(() => {
    refresh_progresses()
  }, [bandicoots, curr_bandicoot_name, loading_rmv, loading_crt])

  /**
   * Support functions
   */
  const init_progresses = () => {
    if (bandicoots && is_obj_empty(progresses)) {
      const progs: dict<progress_t> = {}
      bandicoot_config?.forEach(({ name }) => {
        progs[name] = { disabled: false, loading_create: false, loading_remove: false }
      })
      bandicoots?.forEach(({ name }) => {
        progs[name].disabled = true
      })
      set_progresses(progs)
    }
  }

  const refresh_progresses = () => {
    const progs: dict<progress_t> = {}
    Object.entries(progresses)?.forEach(([name, band]) => {
      progs[name] = {
        ...band,
        disabled: !!bandicoots?.find(({ name: n }) => n === name),
      }
      if (name === curr_bandicoot_name) {
        progs[name] = {
          ...progs[name],
          loading_create: loading_crt,
          loading_remove: loading_rmv,
        }
      }
    })
    set_progresses(progs)
  }

  const create_bandicoot = (bandicoot: bandicoot_t) => {
    set_curr_bandicoot_name(bandicoot?.name)
    dispatch(shoot.saga_create_bandicoot(bandicoot))
  }

  const remove_bandicoot = (bandicoot_name: string) => {
    set_curr_bandicoot_name(bandicoot_name)
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
          disabled={loading_rmv || loading_crt}
          loading={progresses[name]?.loading_remove}
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
      disabled={progresses[name]?.disabled || loading_rmv || loading_crt}
      loading={progresses[name]?.loading_create}
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
        </>
      )}
    </main>
  )
}

export default Intro2
