import './aligns.scss'

import { FC } from 'react'

const Aligns: FC = () => {
  return (
    <main className="p-3">
      <h1 className="font-32">Alignments example</h1>
      <div className="grid-wrapper bg-success">
        <div className="px-3 py-2 grid-item bg-primary">STUFF</div>
        <div className="px-3 py-2 grid-item bg-danger">STUFF</div>
        <div className="px-3 py-2 grid-item bg-warning">STUFF</div>
        <div className="px-3 py-2 grid-item bg-danger">STUFF</div>
        <div className="px-3 py-2 grid-item bg-warning">STUFF</div>
        <div className="px-3 py-2 grid-item bg-danger">STUFF</div>
        <div className="px-3 py-2 grid-item bg-warning">STUFF</div>
        <div className="px-3 py-2 grid-item bg-warning">STUFF</div>
      </div>
    </main>
  )
}

export default Aligns
