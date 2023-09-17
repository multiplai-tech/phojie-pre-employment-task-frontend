<script setup lang="ts">
import type { SignupCredentials } from '~/types'
import { signupSchema } from '~/schemas'

const { signup } = useAuthStore()

const loading = ref(false)

const form = ref<SignupCredentials>({
  name: '',
  email: '',
  password: '',
})
const { validateField, validateForm, errors } = useValidation(form, signupSchema)

const isPasswordVisible = ref(false)

async function submitForm() {
  // validate form
  const isValid = await validateForm()

  if (!isValid)
    return

  // trigger loading state
  loading.value = true

  const { error } = await signup(form.value)
  if (error.value)
    errors.value = { ...errors.value, server: error.value.data }

  loading.value = false

  // redirect to dashboard
  if (!error.value)
    navigateTo('/')
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
      id="name"
      label="Name"
      :status="errors?.name ? 'error' : undefined"
      :message="errors?.name?.[0]"
    >
      <NInput
        v-model="form.name"
        placeholder="Phojie Rengel"
        class="bg-base"
        :disabled="loading"
        @blur="validateField('name')"
      />
    </NFormGroup>

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
        label="Signup"
        :loading="loading"
      />
    </div>
  </form>
</template>
