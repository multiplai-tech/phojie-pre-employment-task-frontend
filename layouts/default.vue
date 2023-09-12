<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen flex flex-col">
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
