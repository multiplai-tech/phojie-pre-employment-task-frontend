<script setup lang="ts">
const colorMode = useColorMode()
function toggleDark() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <NButton
    btn="ghost-gray square"
    @click="toggleDark()"
  >
    <NIcon
      size="md"
      name="i-fa6-solid-sun dark:i-fa6-solid-moon"
    />
  </NButton>
</template>
