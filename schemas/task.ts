import { z } from 'zod'

export const taskSchema = z.object({
  id: z.string().readonly().optional(),
  title: z.string()
    .nonempty({ message: 'Title is required' }),
  description: z.string()
    .nonempty({ message: 'Description is required' }),
  status: z.enum(['complete', 'incomplete']).default('incomplete'),
  // dueDate should be today or in the future
  dueDate: z.string()
    .nonempty({ message: 'Due date is required' }),
})
