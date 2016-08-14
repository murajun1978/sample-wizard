import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContactForm from '../../components/ContactForm'
import * as WizardActions from '../../actions/wizard'

class Step2 extends Component {
  render() {
    const { actions } = this.props

    return (
      <div>
        <h2>Step2</h2>
        <ContactForm
          onSubmit={actions.nextPage}
          previousPage={actions.previousPage}
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
)(Step2)
