import 'babel-polyfill'
import { createAction } from 'redux-actions'
import { push, goBack } from 'react-router-redux'

export const previousPage = () => (dispatch, getState) => {
  dispatch(goBack())
}

export const nextPage = () => (dispatch, getState) => {
  switch (location.pathname) {
    case '/step1':
      dispatch(push('/step2'))
      break
    case '/step2':
      dispatch(push('/step3'))
      break
    case '/step3':
      break
    default:
      dispatch(push('/step1'))
  }
}
