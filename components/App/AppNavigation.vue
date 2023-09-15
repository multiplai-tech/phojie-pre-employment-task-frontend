<script setup lang="ts">
const links1 = [
  {
    leading: 'i-heroicons-document-text',
    label: 'Resume / CV',
  },
  {
    leading: 'i-heroicons-presentation-chart-line',
    label: 'Assessment',
  }, {
    leading: 'i-heroicons-play-circle',
    label: 'Video Script',
  },
]

const links2 = [
  {
    leading: 'i-heroicons-shopping-bag',
    label: 'Application Tracking',
  },
  {
    leading: 'i-heroicons-bookmark',
    label: 'Bookmark',
  },
  {
    leading: 'i-heroicons-bell',
    label: 'Notifications',
    badge: {
      label: '2',
      badge: 'solid-error',
      size: 'xs',
      class: 'rounded-md p-1',
    },
  },
  {
    leading: 'i-heroicons-bolt',
    label: 'Activity Logs',
  },
  {
    leading: 'i-heroicons-cog-6-tooth',
    label: 'Settings',
  },
]
</script>

<template>
  <nav class="w-70 flex flex-col px-4 space-y-2">
    <NNavLink
      leading="i-heroicons-user"
      label="Profile"
      to="/"
      :una="{
        btn: 'font-medium py-2.5',
      }"
      trailing="i-heroicons-chevron-right-20-solid"
    />

    <NNavLink
      v-for="link in links1"
      v-bind="link"
      :key="link.label"
      :una="{
        btn: 'text-$c-gray-500 font-normal',
      }"
    />

    <hr class="border-gray-200 dark:border-gray-800">

    <NNavLink
      v-for="link in links2"
      v-bind="link"
      :key="link.label"
      :una="{
        btn: 'text-$c-gray-500 font-normal',
        btnLabel: '!w-auto',
      }"
    />

    <div>
      <span class="text-xs text-$c-gray-400">
        Copyright 2018 - 2023. Allrights reserved
      </span>

      <p>
        <NButton btn="text" class="p-0 text-xs font-normal" label="Terms of use" />
        <span class="mx-1 text-$c-gray-500">•</span>
        <NButton btn="text" class="p-0 text-xs font-normal" label="Terms of use" />
      </p>
    </div>
  </nav>
</template>
