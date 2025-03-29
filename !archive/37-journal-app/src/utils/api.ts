import axios from 'axios'
import { ArticleInterface } from '../types/article.interface'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

export const fetchArticles = async (sortField: string | null) => {
  try {
    const params: Record<string, string | number> = {
      _start: 0,
      _limit: 10
    }

    if (sortField) {
      const sortOrder = sortField.startsWith('-') ? 'desc' : 'asc'
      params._sort = sortField.startsWith('-')
        ? sortField.substring(1)
        : sortField
      params._order = sortOrder
    }

    const response = await axios.get(`${API_URL}`, { params })
    const data = response.data.map((article: ArticleInterface) => ({
      ...article,
      slug: article.title.toLowerCase().replace(/\s+/g, '-')
    }))
    return data
  } catch (error: unknown) {
    throw new Error(
      `Error fetching data: ${(error as Error)?.message || 'Unknown error'}`
    )
  }
}

export const fetchSingleArticle = async (id: number | string) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`)
    const data: ArticleInterface = response.data

    if (data) {
      const article: ArticleInterface = {
        ...data,
        slug: data.title.toLowerCase().replace(/ /g, '-')
      }
      return article
    }
    return null
  } catch (error: unknown) {
    throw new Error(
      `Error fetching data: ${(error as Error)?.message || 'Unknown error'}`
    )
  }
}
