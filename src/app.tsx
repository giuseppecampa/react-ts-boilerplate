import 'src/app.scss'

import React, { Suspense } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Route, Switch } from 'react-router'
import { routes } from 'src/navigation/routes'
import { DrawerContent, Header } from 'src/widgets'

const App: React.FC = () => {
  /**
   * Render functions
   */
  const render_route = (component: JSX.Element) => (
    <Row className="m-0 p-0 flex-fill overflow-y-scroll">
      <DrawerContent classes="p-0 col-xl-2 col-lg-3 d-lg-block d-none" />
      <Container className="p-0 col-xl-10 col-lg-9 col-12 bg-light flex-main">
        {component}
      </Container>
    </Row>
  )

  return (
    <section className="vh-100 flex-scaffold">
      <Suspense fallback={<div />}>
        <Switch>
          {routes?.map(({ path, component }, idx) => (
            <Route key={idx} exact path={path}>
              <Header />

              {render_route(component)}

              {/* TODO - FOOTER */}
            </Route>
          ))}
        </Switch>
      </Suspense>
    </section>
  )
}

export default App
