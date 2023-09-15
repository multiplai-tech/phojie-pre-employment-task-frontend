<script setup lang="ts">

</script>

<template>
  <div class="rounded-md bg-base p-4 shadow-sm">
    <h2 class="text-sm font-medium text-$c-gray-600">
      Profile Completion
    </h2>

    <div class="relative mt-1">
      <span class="absolute right-0 text-xs font-medium -top-4 text-success">
        100%
      </span>

      <div class="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          class="h-2 w-full rounded-full bg-success"
        />
      </div>
    </div>

    <div class="mt-3 flex flex-col items-center space-y-3">
      <span class="text-15px text-success">
        Well done, Reyven!
      </span>

      <NIcon name="i-emojione-sports-medal" class="text-7xl" />

      <p class="text-13px font-light leading-4 text-$c-gray-500">
        You have one of the strongest professional profile in our talent pool. Expect progress on your application at any time soon.
      </p>
    </div>
  </div>
</template>
