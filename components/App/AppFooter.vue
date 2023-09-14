<script setup lang="ts">
const { name } = useAppInfo()
</script>

<template>
  <footer class="mx-auto mt-40 max-w-7xl overflow-hidden px-6 pb-20 sm:mt-64 lg:px-8 sm:pb-24">
    <p class="mt-10 text-center text-xs leading-5 text-muted">
      &copy; 2023 {{ name }}. All rights reserved.
    </p>
  </footer>
</template>
