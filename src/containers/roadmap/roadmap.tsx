import { FC } from 'react'

interface item_t {
  name: string
  todo?: boolean
}

const Roadmap: FC = () => {
  const features: item_t[] = [
    { name: '⚛️ React' },
    { name: '⚓ TypeScript' },
    { name: '👀 ESLint' },
    { name: '🌈 Prettier' },
    { name: '💄 SCSS' },
    { name: '🅱️ Bootstrap' },
    { name: '🔷 Material UI' },
    { name: '🚀 Redux (redux-store & redux-saga)' },
    { name: '🔥 Firebase' },
    { name: '☁️ Axios', todo: true },
    { name: '🌎 i18n', todo: true },
  ]
  const widgets: item_t[] = [
    { name: 'Button' },
    { name: 'Carousel', todo: true },
    { name: 'CheckBox', todo: true },
    { name: 'DatePicker', todo: true },
    { name: 'Drawer' },
    { name: 'Footer', todo: true },
    { name: 'Header' },
    { name: 'InputText', todo: true },
    { name: 'Loader', todo: true },
    { name: 'Modal' },
    { name: 'RadioGroup', todo: true },
    { name: 'SelectMenu', todo: true },
    { name: 'Tabbar' },
  ]

  /**
   * Render functions
   */
  const render_item = ({ name, todo }: item_t, idx: number) => (
    <div key={idx} className="m-2 ml-4 font-18 c-7f7f7f">
      <span>{name}</span>
      {<span className="ml-2 text-success">{todo ? '🔨' : '✔'}</span>}
      {todo && <span className="text-primary">{' [Coming soon]'}</span>}
    </div>
  )

  return (
    <main className="p-3">
      <h1 className="font-32">Roadmap</h1>

      <h3 className="mt-4 font-22 c-4e4b4b">Features</h3>
      {features?.map(render_item)}

      <h3 className="mt-4 font-22 c-4e4b4b">Widgets</h3>
      {widgets?.map(render_item)}
    </main>
  )
}

export default Roadmap
