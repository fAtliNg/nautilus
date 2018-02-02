import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'
import {configureStore} from './store/configureStore'

import Routes from './routes/Routes'
import rootSaga from './sagas/rootSaga'

injectTapEventPlugin()

const store = configureStore()
store.runSaga(rootSaga)

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Routes />
    </Provider>
  </AppContainer>,
    document.getElementById('app')
)

if (module.hot) {
    // Whenever a new version of App.js is available
  module.hot.accept('./routes/Routes', function () {
        // Require the new version and render it instead
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <Routes />
        </Provider>
      </AppContainer>,
            document.getElementById('app')
        )
  })
}
