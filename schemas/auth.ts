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

export const registerSchema = z.object({
  email: z.string()
    .nonempty({ message: 'Email is required' })
    .email({ message: 'The email is not valid' }),
  password: z.string()
    .nonempty({ message: 'Password is required' })
    .min(8, { message: 'Password must be at least 8 characters' })
    .refine(value => /[A-Z]/.test(value), {
      message: 'Password must contain at least one uppercase letter',
    })
    .refine(value => /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value), {
      message: 'Password must contain at least one special character',
    }),
})
