<script setup lang="ts">
const colorMode = useColorMode()

const { user } = useAuthStore()
</script>

<template>
  <header class="fixed left-0 right-0 top-0 z-10 grid grid-cols-6 h-18 border-b border-base bg-base px-4 shadow-sm space-x-1 lg:px-8 md:px-6">
    <!-- left -->
    <nav class="col-span-2 flex items-center lg:space-x-20">
      <NLink to="/" class="h-8 shrink-0">
        <ClientOnly>
          <img :src=" colorMode.preference === 'dark' ? '/goteam-og-light.png' : '/goteam-og.png'" class="h-8">
        </ClientOnly>
      </NLink>

      <!-- tabs -->
      <div class="hidden flex-nowrap items-center lg:flex space-x-4">
        <NNavLink label="Careers" :una="{ btn: 'text-$c-gray-500 font-normal !bg-transparent' }" />
        <NNavLink label="Find your role" :una="{ btn: 'whitespace-nowrap text-$c-gray-500 font-normal !bg-transparent' }" />
      </div>
    </nav>

    <!-- center -->
    <div class="col-span-2 flex items-center">
      <NInput
        class="rounded-full py-2.5 pl-6 pr-25 text-md sm:pr-30 placeholder:font-light placeholder:text-$c-gray-400"
        placeholder="Type for job title or role"
        :una="{
          inputWrapper: 'grow px-1.5 hidden sm:flex',
          inputTrailingWrapper: 'pointer-events-auto cursor-pointer',
        }"
      >
        <template #trailing>
          <!-- search icon -->
          <NButton
            class="rounded-full py-1.6 shadow-none lg:px-4"
            leading="i-heroicons-magnifying-glass-20-solid"
          >
            <span class="hidden text-xs font-light tracking-wide lg:block">
              Search
            </span>
          </NButton>
        </template>
      </NInput>
    </div>

    <!-- right -->
    <div class="col-span-2 flex justify-end">
      <div class="flex grow items-center justify-end">
        <div class="group ml-10 flex cursor-pointer items-center space-x-2.5">
          <div class="text-right text-xs leading-4">
            <div class="font-bold">
              {{ user?.name }}
            </div>
            <div class="text-primary">
              {{ user?.email }}
            </div>
          </div>

          <NAvatar
            size="sm"
            src="https://avatars.githubusercontent.com/u/33350692?v=4"
            alt="Phojie Rengel"
          />

          <NIcon
            name="i-heroicons-chevron-down-20-solid square"
            class="text-$c-gray-500"
          />
        </div>
      </div>
    </div>
  </header>
</template>
