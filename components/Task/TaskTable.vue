<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'
import type { Task } from '~/types'

const store = useTaskStore()
const { tasks, loading } = storeToRefs(store)

function toggleStatus(task: Task) {
  const { id, status } = task

  if (!id)
    return

  if (status === 'complete')
    store.updateTaskStatus(id, 'incomplete')
  else
    store.updateTaskStatus(id, 'complete')
}
</script>

<template>
  <div class="overflow-x-auto -mx-4 -my-2 lg:-mx-8 sm:-mx-6">
    <div class="inline-block min-w-full py-2 align-middle">
      <!-- Table -->
      <table class="min-w-full divide-y divide-base">
        <thead>
          <tr>
            <th scope="col" class="py-3.5 pl-4 pr-2 text-left text-sm font-semibold text-$c-gray-900">
              <span class="sr-only">Checkbox</span>
            </th>
            <th scope="col" class="py-3.5 pr-3 text-left text-sm font-semibold text-$c-gray-900">
              Title
            </th>
            <th scope="col" class="py-3.5 pr-3 text-left text-sm font-semibold text-$c-gray-900">
              Description
            </th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-$c-gray-900">
              Due date
            </th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-$c-gray-900">
              Status
            </th>
            <th scope="col" class="relative py-3.5 pl-3 pr-4">
              <span class="sr-only">Action</span>
            </th>
          </tr>
        </thead>
        <tbody v-if="tasks" class="divide-y divide-base">
          <tr v-for="task in tasks" :key="task.id" class="cursor-pointer hover:bg-gray/3" @click="toggleStatus(task)">
            <td class="pl-4 pr-2 text-sm">
              <input :checked="task.status === 'complete'" type="checkbox" class="h-6 w-6 rounded accent-primary">
            </td>
            <td class="py-5 pr-3 text-sm text-$c-gray-900">
              {{ task.title }}
            </td>
            <td class="py-5 pr-3 text-sm text-$c-gray-500">
              {{ task.description }}
            </td>
            <td class="whitespace-nowrap px-3 py-5 text-sm text-$c-gray-500">
              {{ useDateFormat(task.dueDate, 'MMM DD, YYYY').value }}
            </td>
            <td class="whitespace-nowrap px-3 py-5 text-sm text-$c-gray-500">
              <NIndicator
                size="3"
                :indicator="`center-left ${task.status === 'complete' ? 'solid-success' : 'solid-error'}`"
                :ping="task.status === 'complete' ? false : true"
              >
                <NBadge
                  size="11px"
                  class="pl-5 capitalize"
                  :badge="task.status === 'complete' ? 'soft-success' : 'outline-error'"
                  :label="task.status === 'complete' ? 'Completed' : 'Incomplete'"
                />
              </NIndicator>
            </td>
            <td class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium">
              <div v-if="task.id" class="flex justify-end space-x-3">
                <NButton
                  btn="square ghost-warning"
                  icon
                  label="i-heroicons-pencil-square-20-solid"
                  @click.stop="store.editTask(task.id)"
                />

                <NButton
                  btn="square ghost-error"
                  icon
                  label="i-heroicons-trash-20-solid"
                  @click.stop="store.deleteTask(task.id)"
                />
              </div>
            </td>
          </tr>

          <tr v-if="tasks.length === 0 && !loading">
            <td colspan="5" class="py-5 text-center text-$c-gray-500">
              No tasks found.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
