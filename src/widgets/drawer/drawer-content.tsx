import { FC } from 'react'
import { drawer_content_t } from 'src/types'

export const DrawerContent: FC<drawer_content_t> = ({
  classes = 'h-100',
  classes_child = 'bg-accent- c-ffffff h-100',
}: drawer_content_t) => {
  return (
    <main className={classes}>
      <div className={classes_child}>TODO DRAWER CONTENT</div>
    </main>
  )
}
