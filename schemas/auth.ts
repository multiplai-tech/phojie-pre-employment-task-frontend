import { z } from 'zod'

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
