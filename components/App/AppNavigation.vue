<script setup lang="ts">
/**
 * We can extract the links to a composable in the future
 * to separate the logic from the template
 */
const links1 = [
  {
    leading: 'i-heroicons-user',
    label: 'Profile',
    to: '/',
  },
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
  {
    leading: 'i-heroicons-rectangle-stack',
    to: '/tasks',
    label: 'Tasks',
  },
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
      v-for="link in links1"
      v-bind="link"
      :key="link.label"
      :trailing="currentRoute.matched[0].path === link.to ? 'i-heroicons-chevron-right-20-solid' : undefined"
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
      <span class="text-xs font-light text-$c-gray-500">
        Copyright 2018 - 2023. Allrights reserved
      </span>

      <p>
        <!-- we can easily add `to=#` here -->
        <NButton btn="text" class="p-0 text-xs font-light" label="Terms of Use" />
        <span class="mx-1 text-$c-gray-500">•</span>
        <NButton btn="text" class="p-0 text-xs font-light" label="Privacy Policy" />
      </p>
    </footer>
  </nav>
</template>
