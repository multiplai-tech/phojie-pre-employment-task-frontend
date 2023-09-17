import type { UseFetchOptions } from 'nuxt/app'
import { useRequestHeaders } from 'nuxt/app'

/**
 * We use this to fetch data from our API instead of using default fetch,
 * This fetch is made specifically for our Laravel API, so we can use it to fetch data from our API
 * without having to worry about the CSRF token, and other stuff.
 */

export function useFetchApi<T>(path: string, options: UseFetchOptions<T> = {}) {
  let headers: any = {
    accept: 'application/json',
  }
  const token = useCookie('XSRF-TOKEN')

  if (token.value)
    headers['X-XSRF-TOKEN'] = token.value as string

  // eslint-disable-next-line n/prefer-global/process
  if (process.server) {
    headers = {
      ...headers,
      ...useRequestHeaders(['cookie']),
    }
  }

  path = path.startsWith('/') ? `/api${path}` : path

  return useFetch(path, {
    credentials: 'include',
    watch: false,
    ...options,
    headers: {
      ...headers,
      ...options?.headers,
    },
  })
}

export async function useFetchCsrf() {
  return await useFetch('/sanctum/csrf-cookie')
}
