import { SORT_KEYS } from './sortConstants'

/**
 * Перевіряє, чи є ключ сортування допустимим
 * @param key Ключ сортування для перевірки
 * @returns true, якщо ключ є в списку допустимих ключів сортування
 */
export const isValidSortKey = (key: string | null): boolean => {
  return SORT_KEYS.includes(key || '')
}
