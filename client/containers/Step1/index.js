import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NameForm from '../../components/NameForm'
import * as WizardActions from '../../actions/wizard'

class Step1 extends Component {
  render() {
    const { actions } = this.props

    return (
      <div>
        <h2>Step1</h2>
        <NameForm
          onSubmit={actions.nextPage}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(WizardActions, dispatch)
})

export default connect(
  null,
  mapDispatchToProps
)(Step1)
