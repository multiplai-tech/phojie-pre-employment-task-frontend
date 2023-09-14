<script setup lang="ts">

</script>

<template>
  <div class="relative min-h-screen flex flex-col">
    <!-- header -->
    <AppHeader />

    <!-- main -->
    <div class="mx-auto max-w-7xl w-full flex items-start gap-x-8 px-4 py-10 lg:px-8 sm:px-6">
      <aside class="sticky top-8 hidden w-44 shrink-0 lg:block">
        <!-- Left column area -->
      </aside>

      <main class="flex-1">
        <!-- Main area -->
        <slot />
      </main>

      <aside class="sticky top-8 hidden w-96 shrink-0 xl:block">
        <!-- Right column area -->
      </aside>
    </div>

    <!-- footer -->
    <LazyAppFooter />

    <div class="absolute right-10 top-20">
      <div class="flex">
        <ColorMode />
        <NThemeSwitcher />
      </div>
    </div>
  </div>
</template>
