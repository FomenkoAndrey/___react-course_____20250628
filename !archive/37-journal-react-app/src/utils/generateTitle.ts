export const generateTitle = (sortField: string | null): string => {
  if (!sortField) return ''

  const fieldName = sortField.startsWith('-') ? sortField.slice(1) : sortField
  const fieldOrder = sortField.startsWith('-') ? 'descending' : 'ascending'

  return ` sorted by ${fieldName}, ${fieldOrder}`
}
