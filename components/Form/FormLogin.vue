<script setup lang="ts">
import type { LoginForm } from '~/types'
import { loginSchema } from '~/schemas/auth'

const { login, isLoggedIn } = useAuthStore()

const loading = ref(false)

const form = ref<LoginForm>({
  email: 'phojrengel@gmail.com',
  password: 'password',
})
const { validateField, validateForm, focusInput, errors } = useValidation(form, loginSchema)

const isPasswordVisible = ref(false)

async function submitForm() {
  // validate form
  const isValid = await validateForm()

  if (!isValid)
    return

  // trigger loading state
  loading.value = true

  const { error } = await login(form.value)
  if (error.value) {
    errors.value = { ...errors.value, server: error.value.data }
    form.value.password = ''
    focusInput('password')
  }

  loading.value = false

  // redirect to dashboard
  if (!error.value)
    navigateTo('/')
}
</script>

<template>
  {{ isLoggedIn }}
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
      id="email"
      label="Email"
      :status="errors?.email ? 'error' : undefined"
      :message="errors?.email?.[0]"
    >
      <NInput
        v-model="form.email"
        placeholder="phojrengel@gmail.com"
        class="bg-base"
        :disabled="loading"
        @blur="validateField('email')"
      />
    </NFormGroup>

    <NFormGroup
      id="password"
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
        :disabled="loading"
        @trailing="isPasswordVisible = !isPasswordVisible"
        @blur="validateField('password')"
      />
    </NFormGroup>

    <!-- Actions -->
    <div class="flex flex-col space-y-2">
      <NButton
        class="mt-2"
        type="submit"
        label="Login"
        :loading="loading"
      />
    </div>
  </form>
</template>
