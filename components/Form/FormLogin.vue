<script setup lang="ts">
import { ref } from 'vue'
import { useToggle } from '@vueuse/core'

// !TODO extract to a composition function

import { z } from 'zod'

const schema = z.object({
  username: z.string().nonempty({ message: 'Username is required' }),
  password: z.string()
    .nonempty({ message: 'Password is required' })
    .min(8, { message: 'Password must be at least 8 characters' })
    .refine(value => /[A-Z]/.test(value), {
      message: 'Password must contain at least one uppercase letter',
    })
    .refine(value => /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value), {
      message: 'Password must contain at least one special character',
    }),
}).required()

type Form = z.infer<typeof schema>

const form = ref<Form>({
  username: '',
  password: '',
})
const errors = ref()

const isPasswordVisible = ref(false)
const [isLoading, toggleLoading] = useToggle()

async function submitForm() {
  // trigger loading state
  isLoading.value = true

  try {
    // extract form values
    const { username, password } = form.value
    // console.log('submitting form', { username, password })
  }
  catch (error) {
    console.error(error)
  }
  finally {
    // trigger loading state
    setTimeout(() => {
      toggleLoading()
    }, 2000)
  }
}

// validate form on submit
function validateForm(isFocused = true) {
  try {
    errors.value = {}
    schema.parse(form.value)

    // if no errors, submit form
    if (typeof errors.value === 'object' && Object.keys(errors.value).length === 0)
      submitForm()
  }
  catch (err) {
    if (err instanceof z.ZodError)
      errors.value = { ...errors.value, ...err.flatten().fieldErrors }

    if (!isFocused)
      return

    // focus on the first error, get the key of the first error
    const firstError = Object.keys(errors.value)[0] as keyof Form
    if (!firstError)
      return

    const refId = document.getElementById(firstError)
    refId?.focus()
  }
}

// validate field on blur
function validateField(field: { id: keyof Form; value: string }) {
  try {
    errors.value = errors.value && Object.fromEntries(
      Object.entries(errors.value).filter(([key]) => key !== field.id),
    )
    schema.pick({ [field.id]: true }).parse({ [field.id]: field.value })
  }
  catch (err) {
    if (err instanceof z.ZodError)
      errors.value = { ...errors.value, ...err.flatten().fieldErrors }
  }
}
</script>

<template>
  <form
    class="flex flex-col border border-base rounded-md bg-muted p-4 space-y-4"
    @submit.prevent="validateForm()"
  >
    <NFormGroup
      id="username"
      label="Username"
      :status="errors?.username ? 'error' : undefined"
      :message="errors?.username?.[0]"
    >
      <NInput
        v-model="form.username"
        placeholder="phojrengel@gmail.com"
        class="bg-base"
        :disabled="isLoading"
        @blur="validateField({
          id: 'username',
          value: form.username,
        })"
      />
    </NFormGroup>

    <NFormGroup
      label="Password"
      :status="errors?.password ? 'error' : undefined"
      :message="errors?.password?.[0]"
    >
      <NInput
        v-model="form.password"
        :type="isPasswordVisible ? 'text' : 'password'"
        :trailing="isPasswordVisible ? 'i-fa6-solid-eye' : 'i-fa6-solid-eye-slash'"
        :una="{
          inputTrailing: 'pointer-events-auto cursor-pointer',
        }"
        class="bg-base"
        :disabled="isLoading"
        @trailing="isPasswordVisible = !isPasswordVisible"
        @blur="validateField({
          id: 'password',
          value: form.password,
        })"
      />
    </NFormGroup>

    <!-- Actions -->
    <div class="flex flex-col space-y-2">
      <NButton
        type="submit"
        label="Login"
        :loading="isLoading"
      />
    </div>
  </form>
</template>
