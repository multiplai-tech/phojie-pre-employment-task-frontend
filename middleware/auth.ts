export default defineNuxtRouteMiddleware(() => {
  const { authenticated } = useAuthStore()

  if (!authenticated)
    return navigateTo('/login', { replace: true })
})
