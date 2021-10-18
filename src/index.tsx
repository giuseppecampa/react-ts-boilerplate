import 'src/i18n'
import 'src/styles/index.scss'

import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/lib/integration/react'
import App from 'src/app'
import createReduxStore from 'src/redux/store/setup'

const { store, persistor } = createReduxStore()

const app = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
