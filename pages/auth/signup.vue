<script setup lang="ts">
definePageMeta({
  layout: 'none',
  middleware: 'guest',
  title: 'Sign Up',
  description: 'Sign up for a new account',
  path: '/signup',
})
</script>

<template>
  <main class="mx-auto max-w-lg px-4 py-24 lg:px-8 sm:px-6">
    <div class="mx-auto max-w-xl rounded-md space-y-12">
      <div class="flex justify-center">
        <AppLogo class="h-35" />
      </div>

      <div class="text-center space-y-1">
        <h1 class="text-3xl font-extrabold text-muted">
          Sign up for a new account
        </h1>
        <p class="text-sm font-medium text-primary">
          Powered by GoTeam Technologies
        </p>
      </div>

      <div class="space-y-4">
        <FormSignup />

        <div class="border border-base rounded-md p-4 text-center text-sm">
          Already have an account?
          <NLink btn="link square" to="/login">
            Login here
          </NLink>
        </div>
      </div>
    </div>
  </main>
</template>
