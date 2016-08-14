import { Route, IndexRedirect } from 'react-router'
import React from 'react'

import App from '../containers/App'
import Step1 from '../containers/Step1'
import Step2 from '../containers/Step2'
import Step3 from '../containers/Step3'

export function routes(store) {
  return (
    <Route path='/' component={App}>
      <IndexRedirect to='step1' />
      <Route path='step1' component={Step1} />
      <Route path='step2' component={Step2} />
      <Route path='step3' component={Step3} />
    </Route>
  )
}
