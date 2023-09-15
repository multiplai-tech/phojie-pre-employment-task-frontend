<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  title: 'Home',
})

const { user } = useAuthStore()
</script>

<template>
  <div class="gap-4">
    <!-- card header -->
    <div class="relative border border-base rounded-md bg-base py-5 shadow-sm space-y-5">
      <div class="px-6">
        <span class="text-xl font-medium">
          Welcome, <span class="capitalize">{{ user?.name.split(' ')[0] }}</span>!
        </span>
        <p class="text-sm font-light leading-6 text-$c-gray-400">
          <span class="text-success">Your are almost done! </span> To further strengthen your profie, it is highly recommended for you to complete the 4 sections of your application.
        </p>
      </div>

      <div class="absolute right-0 px-6 -top-2">
        <div class="relative flex items-center space-x-2">
          <div class="h-6 flex items-center">
            <input id="close" type="checkbox" class="h-4 w-4 rounded accent-primary opacity-60">
          </div>

          <label for="close" class="text-sm font-light text-$c-gray-400">
            Don't remind me again
            <NIcon name="i-heroicons-x-mark-20-solid" class="ml-5 -mt-2 text-error" />
          </label>
        </div>
      </div>

      <hr class="border-base">

      <!-- Profile stats -->
      <div class="px-6">
        <ProfileStats />
      </div>
    </div>
  </div>
</template>
