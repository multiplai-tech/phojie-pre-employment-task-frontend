<script setup lang="ts">
const stages = [
  { name: 'Application Profile', icon: 'i-heroicons-user', href: '#', percent: 75 },
  { name: 'Resume / CV', icon: 'i-heroicons-document-text', href: '#', percent: 50 },
  { name: 'Assessment Score', icon: 'i-heroicons-document-chart-bar', href: '#', percent: 0 },
  { name: 'Video Introduction', icon: 'i-heroicons-presentation-chart-bar', href: '#', percent: 0 },
]
</script>

<template>
  <div class="grid grid-cols-1 mt-3 gap-5 lg:grid-cols-4 sm:grid-cols-2 sm:gap-6">
    <NLink v-for="stage in stages" :key="stage.name" :to="stage.href" class="group col-span-1 flex">
      <div class="w-10 flex flex-shrink-0 items-center justify-center">
        <NAvatar
          avatar="~"
          class="bg-$c-gray-100 group-hover:bg-primary"
        >
          <NIcon :name="stage.icon" class="text-$c-gray-600 group-hover:text-white" />
        </NAvatar>
      </div>
      <div class="flex flex-1 items-center justify-between truncate">
        <div class="flex-1 truncate px-4 py-2 text-sm">
          <span class="font-medium text-$c-gray-600 group-hover:text-primary-active">
            {{ stage.name }}
          </span>
          <div class="flex items-center space-x-3">
            <div class="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                class="h-1.5 rounded-full"
                :class="
                  stage.percent === 100
                    ? 'bg-success'
                    : stage.percent >= 75
                      ? 'bg-warning'
                      : 'bg-error'
                "
                :style="`width: ${stage.percent}%`"
              />
            </div>
            <span
              :class="
                stage.percent === 100
                  ? 'text-success'
                  : stage.percent >= 75
                    ? 'text-warning'
                    : 'text-error'
              "
            >
              {{ stage.percent }}%
            </span>
          </div>
        </div>
      </div>
    </NLink>
  </div>
</template>
