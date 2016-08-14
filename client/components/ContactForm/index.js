import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

import InputField from '../InputField'
import { formValidation } from './formValidation'

export const fields = ['email']

class ContactForm extends Component {
  render() {
    const {
      fields: { email },
      handleSubmit,
      previousPage
    } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <InputField
          field={email}
          placeholder='Email'
        />
        <button type='button'onClick={previousPage}>Previous</button>
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
})(ContactForm)
