import 'src/app.scss'

import React, { Suspense } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Route, Switch } from 'react-router'
import { routes } from 'src/navigation/routes'

import { Header } from './widgets'
import { DrawerContent } from './widgets/drawer/drawer-content'

const App: React.FC = () => {
  /**
   * Render functions
   */
  const render_route = (component: JSX.Element) => (
    <Row className="m-0">
      <DrawerContent classes="p-0 min-vh-100 col-xl-2 col-lg-3 d-lg-block d-none" />
      <Container className="p-0 min-vh-100 col-xl-10 col-lg-9 col-12 bg-light">
        {component}
      </Container>
    </Row>
  )

  return (
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
  )
}

export default App
