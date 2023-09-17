import type { LoginCredentials, SignupCredentials, User } from '~/types/index'

/**
 * 🚧 This is a work in progress, we can improve this store later
 * This is our Auth Store, we can use this store to manage our user authentication and data
 */

export const useAuthStore = defineStore('auth', () => {
  const user = useCookie<User | null>('user')

  const authenticated = computed(() => !!user.value || useCookie('XSRF-TOKEN').value)

  async function logout() {
    await useFetchApi('/auth/logout', { method: 'POST' })
    user.value = null
    useCookie('XSRF-TOKEN').value = ''
    navigateTo('/login')
  }

  async function fetchUser() {
    const { data, error } = await useFetchApi('/user')
    user.value = data.value as User

    if (error.value) {
      user.value = null
      useCookie('XSRF-TOKEN').value = ''
    }
  }

  async function login(credentials: LoginCredentials) {
    await useFetchCsrf()

    const login = await useFetchApi('/auth/login', {
      method: 'POST',
      body: credentials,
    })

    await fetchUser()

    return login
  }

  async function signup(info: SignupCredentials) {
    await useFetchCsrf()

    const signup = await useFetchApi('/auth/register', {
      method: 'POST',
      body: info,
    })

    await fetchUser()
    return signup
  }

  return { user, authenticated, login, fetchUser, logout, signup }
})
