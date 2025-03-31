import { SORT_KEYS } from './sortConstants'

export const isValidSortKey = (key: string | null): boolean => {
  return SORT_KEYS.includes(key || '')
}
