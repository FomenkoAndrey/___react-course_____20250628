import { API_URL, API_ITEMS_PER_PAGE_LIMIT } from '../config/constants'

export function createUrl(page: number | string): string {
  const urlObject: URL = new URL(API_URL)

  urlObject.searchParams.set('page', `${page}`)
  urlObject.searchParams.set('limit', `${API_ITEMS_PER_PAGE_LIMIT}`)

  return urlObject.toString()
}
