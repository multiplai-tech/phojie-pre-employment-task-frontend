<script setup lang="ts">
import { useToggle } from '@vueuse/core'
import type { loginForm } from '~/types'
import { loginSchema } from '~/schemas/auth'

const { $sanctumAuth } = useNuxtApp()

const form = ref<loginForm>({
  email: '',
  password: '',
})

const { validateField, validateForm, errors } = useValidation(loginSchema, form)

const isPasswordVisible = ref(false)
const [isLoading, toggleLoading] = useToggle()

async function submitForm() {
  // trigger loading state
  isLoading.value = true

  try {
    await $sanctumAuth.login(
      {
        email: form.value.email,
        password: form.value.password,
      },
      // Unknown for now
      (data: unknown) => {
        // console.log(data)
      },
    )
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
</script>

<template>
  <form
    class="flex flex-col border border-base rounded-md bg-muted p-4 space-y-4"
    @submit.prevent="validateForm()"
  >
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
        :disabled="isLoading"
        @blur="validateField({
          id: 'email',
          value: form.email,
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
