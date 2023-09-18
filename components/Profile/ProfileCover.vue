<template>
  <div class="relative grid grid-cols-12">
    <!-- profile image -->
    <div class="grid col-span-12 shrink-0 place-items-center border-base pt-7 lg:col-span-3 lg:border-r lg:p-7">
      <div class="flex flex-shrink-0 items-center justify-center lg:w-30">
        <NAvatar
          avatar="solid-white"
          size="15"
          src="/images/profile.png"
          alt="Reyven Biloy"
          class="h-50 w-50 bg-$c-muted lg:h-30 lg:h-30"
        />
      </div>
    </div>

    <!-- profile info -->
    <div class="col-span-12 w-full flex flex-col items-center py-4 pl-6 pr-5 lg:col-span-9 lg:items-start space-y-3 lg:py-7">
      <div class="leading-7">
        <span class="text-xl font-medium">
          Reyven S. Biloy
        </span>

        <p class="text-$c-gray-600">
          UI / UX Designer
        </p>
      </div>

      <div class="flex flex-col space-y-3">
        <div>
          <NIcon name="i-heroicons-academic-cap-20-solid" class="mr-2 text-$c-gray-600" />
          <span class="text-sm font-light text-$c-gray-500">
            Bachelor of Science in Computer Science
          </span>
        </div>

        <div class="flex shrink justify-between gap-2 lg:gap-30">
          <div>
            <NIcon name="i-heroicons-briefcase-20-solid" class="mr-2 text-$c-gray-600" />
            <span class="whitespace-nowrap text-sm font-light text-$c-gray-500">
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
    </div>

    <!-- profile actions -->
    <NButton
      size="xs"
      btn="text-gray square"
      class="absolute right-5 top-6 opacity-70 delay-100 hover:opacity-100"
      icon
      label="i-heroicons-pencil"
    />
  </div>
</template>
