export const getFormControlClass = (errors: Record<string, unknown>, values: Record<string, unknown>, name: string) => {
  const hasValue = Boolean(values[name]?.toString().trim())

  if (!hasValue) return ''
  if (errors[name]) return 'is-invalid'
  return 'is-valid'
}
