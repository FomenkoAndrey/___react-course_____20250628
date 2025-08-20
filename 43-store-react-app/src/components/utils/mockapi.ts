export const API_URL = 'https://655c7acd25b76d9884fd5a52.mockapi.io/products'
export const API_ITEMS_PER_PAGE_LIMIT = 12

export function createUrl(page: number | string, limit: number | string = API_ITEMS_PER_PAGE_LIMIT): string {
  const urlObject = new URL(API_URL)
  urlObject.searchParams.set('page', `${page}`)
  urlObject.searchParams.set('limit', `${limit}`)

  return urlObject.toString()
}
