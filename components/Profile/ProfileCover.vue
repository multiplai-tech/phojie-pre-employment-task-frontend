<template>
  <div class="inline-flex">
    <!-- profile image -->
    <div class="border-r border-base p-7">
      <div class="w-30 flex flex-shrink-0 items-center justify-center">
        <NAvatar
          avatar="solid-white"
          src="/images/profile.png"
          class="h-30 w-auto bg-$c-muted"
        />
      </div>
    </div>

    <!-- profile info -->
    <div class="w-full flex flex-col p-7 pr-30 space-y-3">
      <div class="leading-7">
        <span class="text-xl font-medium">
          Reyven S. Biloy
        </span>

        <p class="text-$c-gray-600">
          UI / UX Designer
        </p>
      </div>

      <div>
        <NIcon name="i-heroicons-academic-cap-20-solid" class="mr-2 text-$c-gray-600" />
        <span class="text-sm font-light text-$c-gray-500">
          Bachelor of Science in Computer Science
        </span>
      </div>

      <div class="w-full flex justify-between">
        <div>
          <NIcon name="i-heroicons-briefcase-20-solid" class="mr-2 text-$c-gray-600" />
          <span class="text-sm font-light text-$c-gray-500">
            12 years
          </span>
        </div>

        <div>
          <NIcon name="i-heroicons-calendar-20-solid" class="mr-2 text-$c-gray-600" />
          <span class="text-sm font-light text-$c-gray-500">
            Immediately
          </span>
        </div>

        <div>
          <NIcon name="i-heroicons-currency-dollar-20-solid" class="mr-2 text-$c-gray-600" />
          <span class="text-sm font-light text-success">
            35,0000
          </span>
        </div>
      </div>
    </div>

    <!-- profile actions -->
    <div class="py-7 pr-5">
      <NButton
        size="xs"
        btn="text-gray"
        class="opacity-70 hover:opacity-100"
        icon
        label="i-heroicons-pencil"
      />
    </div>
  </div>
</template>
