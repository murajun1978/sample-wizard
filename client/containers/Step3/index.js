import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {getValues} from 'redux-form'

import * as WizardActions from '../../actions/wizard'

class Step3 extends Component {
  render() {
    const { formData, actions } = this.props

    console.log(formData)
    return (
      <div>
        <h2>Step3</h2>
        <div>First Name: {formData.firstName}</div>
        <div>Last Name: {formData.lastName}</div>
        <div>Email: {formData.email}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  formData: getValues(state.form.wizard)
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(WizardActions, dispatch)
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Step3)
