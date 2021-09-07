import './input-text.scss'

import { FC } from 'react'
import { inputtext_t } from 'src/types'

export const InputText: FC<inputtext_t> = ({
  id,
  on_change,
  label,
  classes = 'col-lg-4 col-sm-6 col-12 p-2',
  classes_input = 'w-100',
}: inputtext_t) => {
  return (
    <main className={classes}>
      {label && (
        <>
          <label htmlFor={id}>{label}</label>
          <br />
        </>
      )}
      <input
        id={id}
        type="text"
        onChange={(event) => on_change?.(event.target.value)}
        className={classes_input}
      />
    </main>
  )
}
