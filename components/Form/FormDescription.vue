<script setup lang="ts">
interface Description {
  label: string
  value: string
  ddClass?: string
}

interface ProfileDetailsProps {
  descriptions: Description[]
  title: string
}

defineProps<ProfileDetailsProps>()
</script>

<template>
  <div>
    <div class="flex justify-between pl-7 pr-5">
      <h3 class="font-medium leading-7 text-$c-gray-900 text-base">
        {{ title }}
      </h3>

      <!-- profile actions -->
      <NButton
        size="xs"
        btn="text-gray"
        class="opacity-70 delay-100 group-hover:opacity-100"
        icon
        label="i-heroicons-pencil"
      />
    </div>

    <!-- description list -->
    <dl class="px-7">
      <div v-for="(item, index) in descriptions" :key="index" class="py-2 sm:grid sm:grid-cols-3">
        <dt class="text-13px font-light leading-6 text-$c-gray-500">
          {{ item.label }}
        </dt>
        <dd
          class="mt-1 text-sm leading-6 text-$c-gray-700 sm:col-span-2 sm:mt-0"
          :class="item.ddClass"
        >
          {{ item.value }}
        </dd>
      </div>
    </dl>
  </div>
</template>
