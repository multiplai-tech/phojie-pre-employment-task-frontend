<script setup lang="ts">
const projects = [
  { name: 'Application Profile', icon: 'i-heroicons-user', href: '#', percent: 75 },
  { name: 'Resume / CV', icon: 'i-heroicons-document-text', href: '#', percent: 50 },
  { name: 'Assessment Score', icon: 'i-heroicons-document-chart-bar', href: '#', percent: 0 },
  { name: 'Video Introduction', icon: 'i-heroicons-presentation-chart-bar', href: '#', percent: 0 },
]
</script>

<template>
  <div class="grid grid-cols-1 mt-3 gap-5 lg:grid-cols-4 sm:grid-cols-2 sm:gap-6">
    <NLink v-for="project in projects" :key="project.name" :to="project.href" class="group col-span-1 flex">
      <div class="w-10 flex flex-shrink-0 items-center justify-center">
        <NAvatar
          avatar="~"
          class="bg-$c-gray-100 group-hover:bg-primary"
        >
          <NIcon :name="project.icon" class="text-$c-gray-600 group-hover:text-white" />
        </NAvatar>
      </div>
      <div class="flex flex-1 items-center justify-between truncate">
        <div class="flex-1 truncate px-4 py-2 text-sm">
          <span class="font-medium text-$c-gray-600 group-hover:text-primary-active">
            {{ project.name }}
          </span>
          <div class="flex items-center space-x-3">
            <div class="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                class="h-1.5 rounded-full"
                :class="
                  project.percent === 100
                    ? 'bg-success'
                    : project.percent >= 75
                      ? 'bg-warning'
                      : 'bg-error'
                "
                :style="`width: ${project.percent}%`"
              />
            </div>
            <span
              :class="
                project.percent === 100
                  ? 'text-success'
                  : project.percent >= 75
                    ? 'text-warning'
                    : project.percent === 0
                      ? 'text-error'
                      : 'text-gray-500'"
            >
              {{ project.percent }}%
            </span>
          </div>
        </div>
      </div>
    </NLink>
  </div>
</template>
