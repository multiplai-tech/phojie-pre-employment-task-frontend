export default defineNuxtPlugin(async (nuxtApp) => {
  const { fetchUser, isLoggedIn } = useAuthStore()

  // eslint-disable-next-line n/prefer-global/process
  if (!process.server && !isLoggedIn)
    await fetchUser()
})
