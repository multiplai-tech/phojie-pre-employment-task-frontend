import { z } from 'zod'

// schema: any for now, but should be zod schema
export function useValidation(schema: any, form: Record<string, any>) {
  type Form = z.infer<typeof schema>
  const errors = ref<Record<keyof Form, any>>({})
  const formValue = toValue(form)
  // validate form on submit
  function validateForm(isFocused = true) {
    try {
      errors.value = {}
      schema.parse(formValue)
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

      const refId = document.getElementById(firstError as string)
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
        errors.value = { ...errors.value, ...err.flatten().fieldErrors } as any
    }
  }

  return { validateForm, validateField, errors }
}
