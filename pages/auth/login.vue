<script setup lang="ts">
definePageMeta({
  title: 'Login',
  description: 'Login to your account',
  path: '/login',
})
</script>

<template>
  <main class="mx-auto max-w-lg px-4 lg:px-8 sm:px-6">
    <div class="mx-auto max-w-xl rounded-md space-y-8">
      <div class="flex justify-center">
        <AppLogo class="h-35" />
      </div>

      <div class="text-center space-y-1">
        <h1 class="text-3xl font-extrabold text-muted">
          Sign in to your account
        </h1>
        <p class="text-sm font-medium text-primary">
          Powered by GoTeam Technologies
        </p>
      </div>

      <FormLogin />

      <div class="border border-base rounded-md p-4 text-center text-sm">
        No account yet?
        <NLink btn="link square" to="/signup">
          Create an account here
        </NLink>
      </div>
    </div>
  </main>
</template>
