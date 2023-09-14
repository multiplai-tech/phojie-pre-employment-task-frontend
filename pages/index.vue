<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  title: 'Dashboard',
  description: 'Dashboard',
})

const { user, fetchUser } = useAuthStore()
</script>

<template>
  <div @click="fetchUser()">
    user:
    {{ user }}
  </div>
</template>
