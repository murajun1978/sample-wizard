import { createStore, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'

import rootReducer from '../reducers'

// middlewares
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import { routerMiddleware } from 'react-router-redux'
import createLogger from 'redux-logger'

const router = routerMiddleware(browserHistory)

const middlewares = [
  thunk,
  promiseMiddleware,
  router
]

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger()
  middlewares.push(logger)
}

export default function configure(initialState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

  const createStoreWithMiddleware = applyMiddleware(
    ...middlewares
  )(create)

  const store = createStoreWithMiddleware(rootReducer, initialState)

  return store
}
