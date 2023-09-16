<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  title: 'Tasks',
})

const { tasks } = useTask()
</script>

<template>
  <div class="">
    <div class="border-base rounded-md bg-base px-4 py-7 shadow-sm sm:flex sm:items-center dark:border lg:px-8">
      <div class="sm:flex-auto">
        <h1 class="font-semibold leading-6 text-$c-gray-900 text-base">
          Tasks
        </h1>
        <p class="mt-2 text-sm text-$c-gray-700">
          A list of all the tasks that you need to accomplish.
        </p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <NButton
          btn="solid"
          label="Create Task"
          trailing="i-heroicons-plus-circle-20-solid"
        />
      </div>
    </div>
    <div class="mt-3 flow-root border-base rounded-md bg-base px-4 shadow-sm dark:border lg:px-8">
      <div class="overflow-x-auto -mx-4 -my-2 lg:-mx-8 sm:-mx-6">
        <div class="inline-block min-w-full py-2 align-middle lg:px-8 sm:px-6">
          <table class="min-w-full divide-y divide-base">
            <thead>
              <tr>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-$c-gray-900 sm:pl-0">
                  Title
                </th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-$c-gray-900">
                  Description
                </th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-$c-gray-900">
                  Due date
                </th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-$c-gray-900">
                  Status
                </th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="task in tasks" :key="task.id">
                <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                  <div class="text-$c-gray-900">
                    {{ task.title }}
                  </div>
                </td>
                <td class="whitespace-nowrap px-3 py-5 text-sm text-$c-gray-500">
                  <div class="text-$c-gray-900">
                    {{ task.description }}
                  </div>
                </td>
                <td class="whitespace-nowrap px-3 py-5 text-sm text-$c-gray-500">
                  {{ task.dueDate }}
                </td>
                <td class="whitespace-nowrap px-3 py-5 text-sm text-$c-gray-500">
                  <NBadge label="Active" />
                </td>
                <td class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                  <a href="#" class="text-primary hover:text-indigo-900">Edit</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
