export interface ValidationState {
  hasValue: boolean
  hasError: boolean
  shouldShowError: boolean
  shouldShowSuccess: boolean
}

export const getValidationState = (
  errors: Record<string, unknown>,
  values: Record<string, unknown>,
  name: string,
  interacted: boolean
): ValidationState => {
  const hasValue = Boolean(values[name]?.toString().trim())
  const hasError = Boolean(errors[name])

  return {
    hasValue,
    hasError,
    shouldShowError: interacted && hasError,
    shouldShowSuccess: interacted && hasValue && !hasError
  }
}
