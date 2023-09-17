import { z } from 'zod'

// Custom validation function to check if the date is today or in the future
function isTodayOrFuture(value: string) {
  const dueDate = new Date(value).toISOString().slice(0, 10)
  const currentDate = new Date().toISOString().slice(0, 10)
  return dueDate >= currentDate
}

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
