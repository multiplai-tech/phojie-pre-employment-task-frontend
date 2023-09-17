import { z } from 'zod'

/**
 * This file contains all the schemas from our api.
 * We use zod to define our schemas, this allows us to validate data from the frontend.
 * It helps us optimize requests and avoid sending invalid data to the backend.
 */

export const loginSchema = z.object({
  email: z.string()
    .nonempty({ message: 'Email is required' })
    .email({ message: 'The email is not valid' }),
  password: z.string()
    .nonempty({ message: 'Password is required' }),
}).required()

export const signupSchema = z.object({
  name: z.string()
    .nonempty({ message: 'Name is required' }),
  email: z.string()
    .nonempty({ message: 'Email is required' })
    .email({ message: 'The email is not valid' }),
  password: z.string()
    .nonempty({ message: 'Password is required' }),
})
