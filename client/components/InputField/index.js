import React from 'react'

const InputField = ({ field, placeholder }) => (
  <div>
    <div>
      <input type='text' placeholder={placeholder} {...field}/>
      { field.touched && field.error && <span>{field.error}</span> }
    </div>
  </div>
)

export default InputField
