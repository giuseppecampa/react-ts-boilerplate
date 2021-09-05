import { FC } from 'react'
import { Row } from 'react-bootstrap'
import { Accordion } from 'src/widgets'

export const Accordions: FC = () => {
  /**
   * Render methods
   */
  const render_standard = () => (
    <Accordion label="Standard Accordion" classes="col-lg-4 my-4 p-0">
      <p className="m-0 p-2 font-16 bg-ffffff">Standard Accordion</p>
    </Accordion>
  )

  const render_custom_label = () => (
    <Accordion
      classes="col-lg-4 my-4 p-0"
      label_child={
        <Row className="m-0 p-0 px-2 flex-fill justify-content-between bg-ffffff shadow-sm">
          <p className="m-0 p-0 font-20">Custom Label</p>
          <p className="m-0 p-0 font-20">Accordion</p>
        </Row>
      }
    >
      <p className="m-0 mt-2 p-2 font-16 bg-ffffff shadow-sm">Custom Label Accordion</p>
    </Accordion>
  )

  const render_custom_fixed = () => (
    <Accordion
      classes="col-lg-4 my-4 p-0"
      fixed_child={
        <Row className="m-0 p-0 px-2 flex-fill justify-content-between bg-ffffff shadow-sm">
          <p className="m-0 p-0 font-20">Custom Fixed</p>
          <p className="m-0 p-0 font-20">Accordion</p>
        </Row>
      }
    >
      <p className="m-0 mt-2 p-2 font-16 bg-ffffff shadow-sm">Custom Fixed Accordion</p>
    </Accordion>
  )

  const render_custom_wrap = () => (
    <Accordion label="Custom Wrap Accordion" classes="col-lg-4 my-4 p-2 bg-ffffff shadow rounded">
      <p className="m-0 p-2 font-16 bg-ffffff">Custom Wrap Accordion</p>
    </Accordion>
  )

  return (
    <main className="mx-3">
      <h1 className="mb-3 font-32">Accordions</h1>
      {render_standard()}
      {render_custom_label()}
      {render_custom_fixed()}
      {render_custom_wrap()}
    </main>
  )
}
