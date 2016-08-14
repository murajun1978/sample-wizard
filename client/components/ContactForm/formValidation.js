import { createValidator, required, email } from '../../utils/validation'

export const formValidation = createValidator({
  email: [required, email]
})
