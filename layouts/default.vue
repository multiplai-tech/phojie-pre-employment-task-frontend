<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col">
    <!-- header -->
    <TheHeader />

    <!-- main -->
    <div class="mt-24 flex-1">
      <slot />
    </div>

    <!-- footer -->
    <LazyTheFooter />
  </div>
</template>
