import { z } from 'zod'

// schema: any for now, but should be zod schema
export function useValidation(form: Record<string, any>, schema: any) {
  type Form = z.infer<typeof schema>
  const errors = ref()
  const formValue = toValue(form)

  // validate form on submit
  function validateForm(isFocused = true) {
    try {
      errors.value = {}
      schema.parse(formValue)

      // if no errors
      if (typeof errors.value === 'object' && Object.keys(errors.value).length === 0)
        return true
    }
    catch (err) {
      if (err instanceof z.ZodError)
        errors.value = { ...errors.value, ...err.flatten().fieldErrors }

      if (!isFocused)
        return

      // focus on the first error, get the key of the first error
      const firstError = Object.keys(errors.value)[0] as keyof Form
      if (!firstError)
        return false

      // focus on the first error
      focusInput(firstError)

      return false
    }
  }

  // validate field on blur
  function validateField(id: keyof Form) {
    try {
      errors.value = errors.value && Object.fromEntries(
        Object.entries(errors.value).filter(([key]) => key !== id),
      )

      schema.pick({ [id]: true }).parse({ [id]: formValue[id as string] })
    }
    catch (err) {
      if (err instanceof z.ZodError)
        errors.value = { ...errors.value, ...err.flatten().fieldErrors } as any
    }
  }

  // focus on input
  function focusInput(id: keyof Form) {
    nextTick(() => {
      const refId = document.getElementById('password')
      refId?.focus()
    })
  }

  return { validateForm, validateField, focusInput, errors }
}
