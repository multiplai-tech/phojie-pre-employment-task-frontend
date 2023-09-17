import type { Task } from '~/types'

// we can extract this to a global interface
interface Modal {
  isOpen: boolean
  status: 'create' | 'edit'
}

export const useTaskStore = defineStore('task', () => {
  const router = useRouter()
  const tasks = ref<Task[]>()

  const modal = ref<Modal>({
    isOpen: false,
    status: 'create',
  })

  const task = ref<Task>({
    title: '',
    description: '',
    status: 'incomplete',
    dueDate: new Date().toISOString().slice(0, 10),
  })

  const loading = ref(false)

  /**
   * List of all fetchTask methods rom our Backend(API),
   * we can use this methods to fetch data from our API
   *
   */

  // get all tasks from our API, we can pass a query to filter
  async function fetchTasks(query?: object) {
    loading.value = true
    const { pending, data } = await useFetchApi('/tasks', {
      query: { ...router.currentRoute.value.query, ...query },
      lazy: true,
    })

    if (!pending.value)
      tasks.value = data.value as Task[]
    loading.value = false
  }

  // get task from our API by id
  async function fetchTask(id: string) {
    const { data } = await useFetchApi(`/tasks/${id}`)
    task.value = data.value as Task
  }

  // create task from our API
  async function storeTask(task: Task) {
    const response = await useFetchApi('/tasks', {
      method: 'POST',
      body: task,
    })

    return response
  }

  // update task from our API
  async function updateTask(task: Task) {
    const response = await useFetchApi(`/tasks/${task.id}`, {
      method: 'PUT',
      body: task,
    })

    return response
  }

  // update task status from our API
  async function updateTaskStatus(id: string, status: string) {
    loading.value = true
    await useFetchApi(`/tasks/${id}`, {
      method: 'PUT',
      body: {
        status,
      },
    })

    fetchTasks()
  }

  // delete task from our API
  async function deleteTask(id: string) {
    loading.value = true
    await useFetchApi(`/tasks/${id}`, {
      method: 'DELETE',
    })

    await fetchTasks()
    loading.value = false
  }

  /**
   * List of all methods from our frontend
   * we can use this methos to manipulate task components without losing reactivity
   */

  async function createTask() {
    await $resetForm()
    modal.value.status = 'create'
    modal.value.isOpen = true
  }

  async function editTask(id: string) {
    await fetchTask(id)
    modal.value.status = 'edit'
    modal.value.isOpen = true
  }

  function closeModal() {
    modal.value.isOpen = false
  }

  function openModal() {
    modal.value.isOpen = true
  }

  function $resetForm() {
    task.value = {
      title: '',
      description: '',
      status: 'incomplete',
      dueDate: new Date().toISOString().slice(0, 10),
    }
  }

  return {
    modal,
    loading,
    tasks,
    task,
    fetchTasks,
    fetchTask,
    storeTask,
    updateTask,
    deleteTask,
    updateTaskStatus,

    createTask,
    editTask,
    closeModal,
    openModal,
    $resetForm,
  }
})
