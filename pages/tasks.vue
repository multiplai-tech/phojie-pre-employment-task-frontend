<script setup lang="ts">
import { watchDebounced } from '@vueuse/core'

definePageMeta({
  middleware: 'auth',
  title: 'Tasks',
})

const router = useRouter()
const store = useTaskStore()
const { loading, modal } = storeToRefs(store)
const search = ref('')

// watch the search ref and fetch the tasks when it changes
watchDebounced(
  search,
  () => {
    // fetch the tasks
    store.fetchTasks({
      search: search.value,
    })

    // update the query string to sync the search value
    router.push({
      query: {
        search: search.value,
      },
    })
  },
  { debounce: 500, immediate: true },
)

// we need to set the search value from the query to the search ref
onMounted(() => {
  const { search: searchQuery } = router.currentRoute.value.query

  if (searchQuery)
    search.value = searchQuery.toString()
})
</script>

<template>
  <div class="min-h-screen">
    <div class="flex flex-col justify-between gap-5 border-base rounded-md bg-base px-4 py-7 shadow-sm dark:border lg:px-8">
      <div class="sm:flex-auto">
        <h1 class="font-semibold leading-6 text-$c-gray-900 text-base">
          Tasks
        </h1>
        <p class="mt-2 text-sm text-$c-gray-700">
          A list of all the tasks that you need to accomplish.
        </p>
      </div>
      <div class="mt-4 gap-4 sm:mt-0">
        <div class="flex flex-col justify-between gap-2 lg:flex-row">
          <!-- search -->
          <NInput
            v-model="search"
            placeholder="Search tasks"
            leading="i-heroicons-magnifying-glass-solid"
          />

          <!-- reload -->
          <div class="flex justify-between space-x-2">
            <NButton
              btn="solid-gray"
              :loading="loading"
              :label="loading ? '' : 'Reload'"
              :icon="loading"
              trailing="i-heroicons-refresh-20-solid"
              @click="store.fetchTasks({ search })"
            />

            <NButton
              btn="solid"
              label="Create Task"
              trailing="i-heroicons-plus-circle-20-solid"
              @click="store.createTask()"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="mt-3 flow-root border-base rounded-md bg-base px-4 dark:border lg:px-8">
      <TaskTable />
    </div>

    <Modal :is-open="modal.isOpen" title="Task Form" @closeModal="store.closeModal()">
      <FormTask @closeModal="store.closeModal()" />
    </Modal>
  </div>
</template>
