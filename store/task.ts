import type { Task } from '~/types'

export const useTask = defineStore('task', () => {
  const tasks = ref<Task[]>([])
  const task = ref<Task | null>(null)

  async function fetchTasks() {
    const { data } = await useFetchApi('/tasks')
    tasks.value = data.value as Task[]
  }

  async function fetchTask(id: number) {
    const { data } = await useFetchApi(`/tasks/${id}`)
    task.value = data.value as Task
  }

  async function createTask(task: Task) {
    const { data } = await useFetchApi('/tasks', {
      method: 'POST',
      body: task,
    })

    return data
  }

  async function updateTask(task: Task) {
    const { data } = await useFetchApi(`/tasks/${task.id}`, {
      method: 'PUT',
      body: task,
    })

    return data
  }

  async function deleteTask(id: number) {
    await useFetchApi(`/tasks/${id}`, {
      method: 'DELETE',
    })
  }

  return { tasks, task, fetchTasks, fetchTask, createTask, updateTask, deleteTask }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTask, import.meta.hot))
