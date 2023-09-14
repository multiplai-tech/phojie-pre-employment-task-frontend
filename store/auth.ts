import type { LoginCredentials, User } from '~/types/index'

interface RegistrationInfo {
  name: string
  email: string
  password: string
  password_confirmation: string
}

export const useAuthStore = defineStore('auth', () => {
  const user = useCookie<User | null>('user')

  const isLoggedIn = computed(() => !!user.value || useCookie('XSRF-TOKEN').value)

  async function logout() {
    await useFetchApi('/auth/logout', { method: 'POST' })
    user.value = null
    navigateTo('/auth/login')
  }

  async function fetchUser() {
    const { data, error } = await useFetchApi('/user')
    user.value = data.value as User

    if (error.value)
      $revoke()
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

  async function register(info: RegistrationInfo) {
    await useFetchCsrf()

    const register = await useFetchApi('/auth/register', {
      method: 'POST',
      body: info,
    })

    if (register.error.value)
      await fetchUser()

    return register
  }

  function $revoke() {
    // We want to revoke the cookie and the user
    user.value = null
    useCookie('XSRF-TOKEN').value = null
  }

  return { user, isLoggedIn, login, fetchUser, logout, register, $revoke }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
