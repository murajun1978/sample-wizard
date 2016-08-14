import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

import InputField from '../InputField'
import { formValidation } from './formValidation'

export const fields = ['firstName', 'lastName']

class NameForm extends Component {
  render() {
    const {
      fields: { firstName, lastName },
      handleSubmit
    } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <InputField
          field={firstName}
          placeholder='First Name'
        />
        <InputField
          field={lastName}
          placeholder='Last Name'
        />
        <button type='submit'>Next</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'wizard',
  fields,
  validate: formValidation,
  destroyOnUnmount: false
})(NameForm)
