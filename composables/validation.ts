import { z } from 'zod'

/**
 * This is a simple validation composable, it uses zod for validation,
 * instead of relying modules like vee-validate and vuelidate,
 * we can use zod to validate our forms, and it's much simpler.
 *
 * We can improve this composable later, but for now, this is enough 🚀
 */

// schema: any for now, but should be zod schema
export function useValidation(form: Record<string, any>, schema: any) {
  type Form = z.infer<typeof schema>
  const errors = ref()
  const formValue = toValue(form)

  // validate form on submit
  function validateForm(isFocused = true): boolean | undefined {
    try {
      errors.value = {}
      // parse the form value with the schema
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
        return

      // focus on the first error
      focusInput(firstError)
    }
  }

  // validate field on blur
  function validateField(id: keyof Form) {
    try {
      // remove the field from the errors object if it exists, so we can validate it again
      errors.value = errors.value && Object.fromEntries(
        Object.entries(errors.value).filter(([key]) => key !== id),
      )

      // we need to pick the field from the schema, and then parse it to validate
      schema.pick({ [id]: true }).parse({ [id]: formValue[id as string] })
    }
    catch (err) {
      // if error is from zod, we can get the field errors
      if (err instanceof z.ZodError)
        errors.value = { ...errors.value, ...err.flatten().fieldErrors } as any
    }
  }

  // focus on input
  function focusInput(id: keyof Form) {
    nextTick(() => {
      const refId = document.getElementById(id as string)
      refId?.focus()
    })
  }

  return { validateForm, validateField, focusInput, errors }
}
