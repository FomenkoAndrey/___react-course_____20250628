import axios from 'axios'
import type { ArticleInterface } from '../types/article.interface'
import { API_URL } from '../constants'
import { createSlug } from '../utils/createSLug'

export const fetchArticles = async (sortField: string | null) => {
  try {
    const params: Record<string, number | string> = {
      _start: 0,
      _limit: 100
    }

    if (sortField) {
      const isDescending = sortField.startsWith('-')
      const sortOrder = isDescending ? 'desc' : 'asc'
      params._sort = isDescending ? sortField.slice(1) : sortField
      params._order = sortOrder
    }

    const response = await axios.get(API_URL, { params })
    const data: ArticleInterface[] = (response.data as ArticleInterface[]).map(
      (article) => ({
        ...article,
        slug: createSlug(article.title)
      })
    )
    return data
  } catch (error: unknown) {
    throw new Error('Error fetching articles', { cause: error })
  }
}

export const fetchArticle = async (id: number | string) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`)
    const data: ArticleInterface = response.data

    if (!data) throw new Error(`Article with ID ${id} not found`)

    return {
      ...data,
      slug: createSlug(data.title)
    }
  } catch (error: unknown) {
    throw new Error('Error fetching article', { cause: error })
  }
}
