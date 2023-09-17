export default defineNuxtPlugin(async () => {
  const { authenticated, fetchUser } = useAuthStore()

  if (!authenticated)
    await fetchUser()
})
