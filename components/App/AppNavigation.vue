<script setup lang="ts">
const links1 = [
  {
    leading: 'i-heroicons-document-text',
    label: 'Resume / CV',
  },
  {
    leading: 'i-heroicons-presentation-chart-line',
    label: 'Assessment',
  },
  {
    leading: 'i-heroicons-play-circle',
    label: 'Video Script',
  },
  // {
  //   leading: 'i-heroicons-rectangle-stack',
  //   to: '/tasks',
  //   label: 'Tasks',
  // },
]

const links2 = [
  {
    leading: 'i-heroicons-briefcase',
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
      class: 'text-12px leading-none rounded-md py-1 !px-1.5 whitespace-normal',
      una: {
        badgeDefaultVariant: 'badge-solid-error',
      },
    },
  },
  {
    leading: 'i-carbon-activity',
    label: 'Activity Logs',
  },
  {
    leading: 'i-heroicons-cog-6-tooth',
    label: 'Settings',
  },
]

const { currentRoute } = useRouter()
</script>

<template>
  <nav class="w-70 flex flex-col px-4 space-y-2">
    <NNavLink
      leading="i-heroicons-user"
      label="Profile"
      to="/"
      :una="{
        btn: 'py-2.5',
      }"
      :trailing="currentRoute.fullPath === '/' ? 'i-heroicons-chevron-right-20-solid' : undefined"
    />

    <NNavLink
      v-for="link in links1"
      v-bind="link"
      :key="link.label"
      :trailing="currentRoute.fullPath === link.to ? 'i-heroicons-chevron-right-20-solid' : undefined"
    />

    <hr class="border-gray-300 dark:border-gray-800">

    <NNavLink
      v-for="link in links2"
      v-bind="link"
      :key="link.label"
      :una="{
        btnLabel: '!w-auto',
      }"
    />

    <footer>
      <span class="text-xs text-$c-gray-400">
        Copyright 2018 - 2023. Allrights reserved
      </span>

      <p class="opacity-90">
        <NButton btn="text" class="p-0 text-xs" label="Terms of use" />
        <span class="mx-1 text-$c-gray-500">•</span>
        <NButton btn="text" class="p-0 text-xs" label="Terms of use" />
      </p>
    </footer>
  </nav>
</template>
