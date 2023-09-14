import type { UseFetchOptions } from 'nuxt/app'
import { useRequestHeaders } from 'nuxt/app'

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

  return useFetch(`http://localhost:8000${path}`, {
    credentials: 'include',
    watch: false,
    ...options,
    headers: {
      ...headers,
      ...options?.headers,
    },
  })
}

export async function useFetchCsrf<T>(path?: string, options: UseFetchOptions<T> = {}) {
  const { csrfCookieUrl } = useRuntimeConfig().public

  path = path || csrfCookieUrl

  return await useFetchApi(path, options)
}
