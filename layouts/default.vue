<script setup lang="ts">
const { logout } = useAuthStore()
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-950">
    <!-- header -->
    <AppHeader class="fixed left-0 right-0 top-0 z-10" />

    <div class="mx-auto mt-15 w-full flex items-start gap-x-8 px-4 py-10 container lg:px-8 sm:px-6">
      <!-- Sidebar -->
      <div class="hidden shrink-0 pt-8 lg:fixed lg:z-50 lg:block lg:w-auto lg:overflow-y-auto lg:pb-4">
        <!-- Navigation -->
        <AppNavigation />
      </div>

      <main class="flex-1 lg:ml-73">
        <!-- Main area -->
        <slot />
      </main>
    </div>

    <!-- Footer -->
    <LazyAppFooter />

    <div class="fixed right-10 top-20 hidden rounded-lg p-1 xl:block">
      <div class="flex flex-col flex-nowrap space-y-2">
        <NThemeSwitcher class="!ml-0" />
        <ColorMode />
        <NButton
          btn="ghost-error square"
          icon
          label="i-heroicons-arrow-left-on-rectangle-20-solid"
          @click="logout()"
        />
      </div>
    </div>
  </div>
</template>
