import { useEffect, useState } from 'react'
import { ArticleInterface } from '../../types/article.interface'
import { fetchSingleArticle } from '../../utils/api'

const SingleArticle = () => {
  const [article, setArticle] = useState<ArticleInterface | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const data = await fetchSingleArticle(1)
        setArticle(data)
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchArticleData()
  }, [])

  return (
    <div>
      {isLoading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!isLoading && !error && article && (
        <div>
          <h1>
            {article.id}. {article.title}
          </h1>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  )
}

export default SingleArticle
