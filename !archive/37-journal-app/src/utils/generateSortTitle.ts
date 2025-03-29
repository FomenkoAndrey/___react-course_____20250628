/**
 * Генерує підпис сортування для заголовка
 * @param sortQuery Запит сортування
 * @param sortField Поле сортування
 * @returns Рядок з інформацією про сортування
 */
export const generateSortTitle = (
  sortQuery: string | null | undefined,
  sortField: string | null | undefined
): string => {
  if (!sortQuery || !sortField) return ''

  const isDescending = sortField.startsWith('-')
  const fieldName = isDescending ? sortField.slice(1) : sortField
  const direction = isDescending ? 'descending' : 'ascending'

  return ` sorted by ${fieldName} ${direction}`
}
