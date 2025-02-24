export const API_URL = 'https://655c7acd25b76d9884fd5a52.mockapi.io/products'

export const API_ITEMS_PER_PAGE_LIMIT = 12

export function createUrl(page: string | number, name: string, sort: string, order: string): string {
  const urlObj = new URL(API_URL)

  urlObj.searchParams.append('page', `${page}`)
  urlObj.searchParams.append('limit', `${API_ITEMS_PER_PAGE_LIMIT}`)

  if (name) {
    urlObj.searchParams.append('name', `${name}`)
  }
  if (sort) {
    urlObj.searchParams.append('sort', `${sort}`)
  }
  if (order) {
    urlObj.searchParams.append('order', `${order}`)
  }

  return urlObj.toString()
}
