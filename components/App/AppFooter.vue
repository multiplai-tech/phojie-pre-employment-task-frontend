<script setup lang="ts">
const { name } = useAppInfo()
</script>

<template>
  <footer class="mx-auto px-6 container lg:px-8">
    <p class="text-center text-xs leading-5 text-muted">
      &copy; 2023 {{ name }}. All rights reserved.
    </p>
  </footer>
</template>
