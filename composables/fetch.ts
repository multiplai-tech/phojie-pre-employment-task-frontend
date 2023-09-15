import type { UseFetchOptions } from 'nuxt/app'
import { useRequestHeaders } from 'nuxt/app'

export function useFetchApi<T>(path: string, options: UseFetchOptions<T> = {}) {
  const { backendUrl, frontendUrl, apiBase } = useRuntimeConfig().public

  let headers: any = {
    accept: 'application/json',
    referer: frontendUrl,
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

  path = path.startsWith('/') ? backendUrl + apiBase + path : path

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

export async function useFetchCsrf<T>(path?: string, options: UseFetchOptions<T> = {}) {
  const { backendUrl } = useRuntimeConfig().public

  path = path || `${backendUrl}/sanctum/csrf-cookie`

  return await useFetchApi(path, options)
}
