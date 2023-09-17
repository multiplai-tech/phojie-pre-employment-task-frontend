import { inject } from '@vercel/analytics'

export default defineNuxtPlugin(() => {
  // eslint-disable-next-line n/prefer-global/process
  if (process.env.NODE_ENV === 'development')
    return

  inject()
})
