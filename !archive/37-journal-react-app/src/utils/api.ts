import axios from 'axios'
import type { ArticleInterface } from '../types/Article.interface'
import { API_URL } from '../constants'

export const getArticles = async (sortField: string | null) => {
  try {
    const params: Record<string, number | string> = {
      _start: 0,
      _limit: 100
    }
    if (sortField) {
      const sortOrder = sortField.startsWith('-') ? 'desc' : 'asc'
      params['_sort'] = sortField.startsWith('-') ? sortField.slice(1) : sortField
      params['_order'] = sortOrder
    }
    const response = await axios.get(API_URL, { params })
    const articles: ArticleInterface[] = response.data.map((article: Partial<ArticleInterface>) => ({
      ...article,
      slug: article.title?.toLowerCase().replace(/\s+/g, '-')
    }))
    return articles
  } catch (error: unknown) {
    throw new Error(`Failed to fetch data: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

export const getSingleArticle = async (slug: string) => {
  try {
    const response = await axios.get(`${API_URL}/${slug}`)

    const data: ArticleInterface | null = response.data
    if (!data) throw new Error('Article not found')

    const article: ArticleInterface = {
      ...data,
      slug: data.title?.toLowerCase().replace(/\s+/g, '-')
    }

    return article
  } catch (error: unknown) {
    throw new Error(`Failed to fetch data: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}
