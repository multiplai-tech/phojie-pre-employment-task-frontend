<script setup lang="ts">
const descriptions = [
  { label: 'Date of Birth', value: '07 July 1986' },
  { label: 'Gender', value: 'Male' },
  { label: 'Civil Status', value: 'Married' },
  { label: 'Nationality', value: 'Filipino' },
]
</script>

<template>
  <FormDescription
    :descriptions="descriptions"
    title="General Details"
    class="py-6"
  />
</template>
