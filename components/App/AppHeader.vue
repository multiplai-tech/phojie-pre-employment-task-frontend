<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <div class="grid grid-cols-6 h-16 border-b border-base px-4 shadow-sm space-x-1 lg:px-8 md:px-6">
    <nav class="col-span-2 flex items-center lg:space-x-20">
      <!-- left -->
      <div class="min-w-30 w-8 w-auto">
        <img :src=" colorMode.preference === 'dark' ? '/goteam-og-light.png' : '/goteam-og.png'" class="h-8">
      </div>

      <!-- tabs -->
      <div class="hidden flex-nowrap items-center text-sm lg:flex space-x-4">
        <NNavLink btn="text-gray" label="Careers" :una="{ btn: 'font-medium' }" />
        <NNavLink btn="text-gray" label="Find your role" :una="{ btn: 'font-medium' }" />
      </div>
    </nav>

    <!-- center -->
    <div class="col-span-2 flex items-center">
      <NInput
        class="rounded-full py-2 pl-5 pr-25 sm:pr-30"
        placeholder="Type for job title or role"
        :una="{
          inputWrapper: 'grow px-1.5 hidden sm:flex',
          inputTrailing: 'pointer-events-auto cursor-pointer',
        }"
      >
        <template #trailing>
          <!-- search icon -->
          <NButton
            label="Search"
            class="rounded-full py-1.5 text-xs font-light shadow-none sm:px-4"
            leading="i-heroicons-magnifying-glass-20-solid"
          />
        </template>
      </NInput>
    </div>

    <!-- right -->
    <div class="col-span-2 flex justify-end">
      <div class="flex grow items-center justify-end">
        <div class="group ml-10 flex cursor-pointer items-center space-x-2.5">
          <div class="text-right text-xs leading-4">
            <div class="font-medium">
              Reyven Biloy
            </div>
            <div class="text-primary">
              reyvenb@gmail.com
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
  </div>
</template>
