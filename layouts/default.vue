<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-950">
    <!-- header -->
    <AppHeader />

    <div class="mx-auto mt-15 w-full flex items-start gap-x-8 px-4 py-10 container lg:px-8 sm:px-6">
      <!-- Sidebar -->
      <div class="hidden shrink-0 pt-8 lg:fixed lg:z-50 lg:block lg:w-auto lg:overflow-y-auto lg:pb-4">
        <!-- Navigation -->
        <AppNavigation />
      </div>

      <main class="flex-1 lg:ml-65">
        <!-- Main area -->
        <slot />
      </main>
    </div>

    <!-- Footer -->
    <LazyAppFooter />

    <div class="fixed right-10 top-20 hidden rounded-lg p-1 lg:block">
      <div class="flex">
        <ColorMode />
        <NThemeSwitcher />
      </div>
    </div>
  </div>
</template>
