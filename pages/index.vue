<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  title: 'Dashboard',
  description: 'Dashboard',
})

const { user } = useAuthStore()
</script>

<template>
  <div>
    {{ user }}
  </div>
</template>
