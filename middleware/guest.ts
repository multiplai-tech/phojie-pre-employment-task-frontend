export default defineNuxtRouteMiddleware(() => {
  const { authenticated } = useAuthStore()

  if (authenticated)
    return navigateTo('/', { replace: true })
})
