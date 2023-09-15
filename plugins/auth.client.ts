export default defineNuxtPlugin(async (nuxtApp) => {
  const { authenticated, fetchUser } = useAuthStore()

  if (!authenticated)
    await fetchUser()
})
