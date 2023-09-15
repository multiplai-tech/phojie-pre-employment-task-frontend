<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  title: 'Home',
})
</script>

<template>
  <div class="gap-4">
    <!-- card header -->
    <div class="relative border border-base rounded-md bg-base py-5 shadow-sm space-y-5">
      <div class="px-6">
        <span class="text-xl font-medium">
          Welcome, <span class="capitalize">Reyven</span>!
        </span>
        <p class="text-sm font-light leading-6 text-$c-gray-400">
          <span class="text-success">Your are almost done! </span> To further strengthen your profie, it is highly recommended for you to complete the 4 sections of your application.
        </p>
      </div>

      <div class="absolute right-0 px-6 -top-2">
        <span class="text-sm font-light text-$c-gray-400">
          Don't remind me again
        </span>
      </div>

      <hr class="border-base">

      <div class="grid-cols-4 px-6">
        <div>
          <span>
            Application Profile
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
