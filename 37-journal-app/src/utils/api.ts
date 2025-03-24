import axios from 'axios'
import { ArticleInterface } from '../types/article.interface'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

export const fetchArticles = async () => {
  try {
    const response = await axios.get(`${API_URL}?_start=0&_limit=10`)
    const data = response.data.map((article: ArticleInterface) => ({
      ...article,
      slug: article.title.toLowerCase().replace(/ /g, '-')
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
