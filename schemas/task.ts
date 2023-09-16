import { z } from 'zod'

export const taskSchema = z.object({
  id: z.string().readonly(),
  title: z.string()
    .nonempty({ message: 'Title is required' }),
  description: z.string()
    .nonempty({ message: 'Description is required' }),
  status: z.enum(['completed', 'incomplete']).default('incomplete'),
  dueDate: z.string(),
}).required()
