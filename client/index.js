import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import React from 'react'
import { render } from 'react-dom'

import { routes } from './Routes'
import configure from './store'

const store = configure()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history} routes={routes(store)} />
  </Provider>,
  document.querySelector('#root')
)
