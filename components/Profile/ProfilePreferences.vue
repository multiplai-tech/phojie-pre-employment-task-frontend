<script setup lang="ts">
const descriptions = [
  { label: 'Day Shift', value: '-' },
  { label: 'Mid Shift', value: '-' },
  { label: 'Night Shift', value: '-' },
  { label: 'English Only Policy (EOP)', value: '-' },
]
</script>

<template>
  <FormDescription
    :descriptions="descriptions"
    title="Preferences"
    class="py-6"
  />
</template>
