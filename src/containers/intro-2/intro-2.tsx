import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { shoot } from 'src/redux/actions'
import { select_bandicoots } from 'src/redux/store'
import { Button, InputText } from 'src/widgets'

const Intro2: FC = () => {
  const dispatch = useDispatch()

  /**
   * Use Selectors
   */
  const bandicoots = useSelector(select_bandicoots)

  /**
   * Use State
   */
  const [name, set_name] = useState('')

  /**
   * Use Effect
   */
  useEffect(() => {
    dispatch(
      shoot.saga_resolve_bandicoots({
        co_name: 'demo',
        do_name: 'v1',
      })
    )
  }, [])

  return (
    <main>
      <h1>Bandicoots</h1>

      {bandicoots?.map(({ name, good }, idx) => (
        <div key={idx}>
          <p className={good ? 'text-success' : 'text-danger'}>{name}</p>
        </div>
      ))}

      <form className="d-flex flex-wrap">
        <InputText id="name" label="Name" on_change={set_name} />
      </form>
      <Button text="Aggiungi" disabled={!name} />
    </main>
  )
}

export default Intro2
