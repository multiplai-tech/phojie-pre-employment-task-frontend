<script setup lang="ts">
const descriptions = [
  { label: 'Recent Job Title', value: 'Web Designer and Developer' },
  { label: 'Interview Availability', value: '-' },
  { label: 'Current Monthly Salary (Gross)', value: 'Php 30,000.00', ddClass: '!text-success' },
  { label: 'Nationality', value: 'Filipino' },
]
</script>

<template>
  <FormDescription
    :descriptions="descriptions"
    title="Professional Status"
    class="py-6"
  />
</template>
