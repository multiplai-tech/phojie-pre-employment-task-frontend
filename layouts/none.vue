<script setup lang="ts">
const { version, env } = useBuildInfo()
</script>

<template>
  <div>
    <em class="absolute right-10 top-10 text-xs font-bold text-base">v{{ version }} ({{ env }})</em>
    <slot />
  </div>
</template>
