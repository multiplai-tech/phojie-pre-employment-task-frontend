export default defineNuxtRouteMiddleware(() => {
  const { isLoggedIn } = useAuthStore()

  if (isLoggedIn)
    return navigateTo('/', { replace: true })
})
