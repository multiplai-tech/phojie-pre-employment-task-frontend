<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <header class="h-18 flex justify-between border-b border-base bg-base px-4 shadow-sm space-x-5 lg:px-8 md:px-6">
    <!-- left -->
    <nav class="flex flex-shrink-0 items-center lg:space-x-20">
      <NLink to="/" class="h-8 shrink-0">
        <ClientOnly>
          <img
            alt="Logo"
            :src=" colorMode.preference === 'dark' ? '/goteam-og-light.png' : '/goteam-og.png'" class="h-8"
          >
        </ClientOnly>
      </NLink>

      <!-- tabs -->
      <div class="hidden shrink-0 lg:block space-x-4">
        <NNavLink label="Careers" :una="{ btn: 'text-$c-gray-500 font-normal !bg-transparent' }" />
        <NNavLink label="Find your role" :una="{ btn: 'whitespace-nowrap text-$c-gray-500 font-normal !bg-transparent' }" />
      </div>
    </nav>

    <!-- center -->
    <div class="flex items-center xl:min-w-xl">
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
            <span class="hidden text-xs font-light tracking-wide text-$c-gray-100 lg:block">
              Search
            </span>
          </NButton>
        </template>
      </NInput>
    </div>

    <!-- right -->
    <div class="flex">
      <div class="group flex cursor-pointer items-center space-x-2.5">
        <div class="text-right leading-4">
          <div class="text-sm font-medium">
            Reyven Beloy
          </div>
          <div class="text-xs text-primary">
            reyvenbeloy@gmail.com
          </div>
        </div>

        <NAvatar
          size="sm"
          src="/images/profile.png"
          alt="Phojie Rengel"
          avatar="solid-white"
        />

        <NIcon
          name="i-heroicons-chevron-down-20-solid square"
          class="text-$c-gray-500"
        />
      </div>
    </div>
  </header>
</template>
