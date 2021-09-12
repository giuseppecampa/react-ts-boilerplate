import { FC, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { trash_icon } from 'src/assets'
import { shoot } from 'src/redux/actions'
import { select_bandicoots } from 'src/redux/store'
import { bandicoot_t } from 'src/types'
import { Button } from 'src/widgets'

const Intro2: FC = () => {
  /**
   * Use Dispatch
   */
  const dispatch = useDispatch()

  /**
   * Use Selectors
   */
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
          classes="p-0 bg-transparent"
          classes_iconl="filter-grey"
          icon_size={20}
          on_press={() => remove_bandicoot(name)}
        />
        <p className={`m-2 ml-3 font-20 ${good ? 'c-primary' : 'c-accent'}`}>{name}</p>
      </Row>
    ))

  const render_button = (bandicoot: bandicoot_t) => (
    <Button
      flavor={bandicoot?.good ? 'primary' : 'accent'}
      text={`Create ${bandicoot?.name?.toUpperCase()}`}
      classes="m-1"
      disabled={!!bandicoots?.find(({ name }) => name === bandicoot?.name)}
      on_press={() => create_bandicoot(bandicoot)}
    />
  )

  return (
    <main className="p-3">
      <h1 className="font-32">Bandicoots</h1>
      <h3 className="font-22 c-7f7f7f">Firebase interaction example</h3>

      <Row className="m-0">
        {render_button({ name: 'Crash', good: true })}
        {render_button({ name: 'Coco', good: true })}
        {render_button({ name: 'Tiny', good: true })}
        {render_button({ name: 'Dingodile', good: true })}
      </Row>

      <Row className="m-0">
        {render_button({ name: 'Cortex', good: false })}
        {render_button({ name: 'Brio', good: false })}
        {render_button({ name: 'Kong', good: false })}
        {render_button({ name: 'Rilla Roo', good: false })}
      </Row>

      {render_bandicoots()}
    </main>
  )
}

export default Intro2
