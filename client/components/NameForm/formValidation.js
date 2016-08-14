import { createValidator, required } from '../../utils/validation'

export const formValidation = createValidator({
  firstName: required,
  lastName: required
})
