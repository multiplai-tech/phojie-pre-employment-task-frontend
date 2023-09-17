<script setup lang="ts">
import { taskSchema } from '~/schemas'

const { storeTask, updateTask, fetchTasks, closeModal } = useTaskStore()
const { loading, task: form, modal } = storeToRefs(useTaskStore())

const { validateField, validateForm, errors } = useValidation(form, taskSchema)

async function submitForm() {
  // validate form
  const isValid = await validateForm()

  if (!isValid)
    return

  const { error } = await (modal.value.status === 'create'
    ? storeTask(form.value)
    : updateTask(form.value))
  if (error.value) {
    errors.value = { ...errors.value, server: error.value.data }
  }

  else {
    // reload the tasks table to show the new task
    fetchTasks()
    closeModal()
  }
}
</script>

<template>
  <form
    class="flex flex-col border border-base rounded-md bg-muted p-4 space-y-4"
    @submit.prevent="submitForm()"
  >
    <NAlert
      v-if="errors?.server"
      :description="errors?.server.message"
      alert="soft-error"
      icon
      class="mb-2"
    />

    <NFormGroup
      id="title"
      label="Title"
      :status="errors?.title ? 'error' : undefined"
      :message="errors?.title?.[0]"
    >
      <NInput
        v-model="form.title"
        placeholder="Do the laundry"
        class="bg-base"
        :disabled="loading"
        @blur="validateField('title')"
      />
    </NFormGroup>

    <NFormGroup
      id="description"
      label="Description"
      :status="errors?.description ? 'error' : undefined"
      :message="errors?.description?.[0]"
    >
      <NInput
        v-model="form.description"
        placeholder="Wash the clothes and hang them to dry"
        class="bg-base"
        :disabled="loading"
        @blur="validateField('description')"
      />
    </NFormGroup>

    <NFormGroup
      id="date"
      label="Due date"
      :status="errors?.dueDate ? 'error' : undefined"
      :message="errors?.dueDate?.[0]"
    >
      <input
        v-model="form.dueDate"
        type="date"
        :class="errors?.dueDate ? 'input-outline-error' : `input-outline-gray`"
        class="bg-base input"
        :disabled="loading"
        @blur="validateField('dueDate')"
      >
    </NFormGroup>

    <!-- Actions -->
    <div class="flex flex-col space-y-2">
      <NButton
        v-if="modal.status === 'create'"
        class="mt-2"
        type="submit"
        label="Create Task"
        :loading="loading"
      />

      <NButton
        v-else-if="modal.status === 'edit'"
        class="mt-2"
        type="submit"
        btn="solid-warning"
        label="Update Task"
        :loading="loading"
      />
    </div>
  </form>
</template>
