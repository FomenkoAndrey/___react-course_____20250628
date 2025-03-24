import { useEffect, useState } from 'react'
import { ArticleInterface } from '../../types/article.interface'
import { fetchArticles } from '../../utils/api'
import { Link } from 'react-router'

const Articles = () => {
  const [articles, setArticles] = useState<ArticleInterface[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArticlesData = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const data = await fetchArticles()
        setArticles(data)
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchArticlesData()
  }, [])

  return (
    <div>
      <h1>Articles</h1>
      <div>
        {isLoading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}
        {!isLoading && !error && (
          <ul>
            {articles.map((article) => (
              <li key={article.id}>
                <Link to={`/articles/${article.slug}`}>
                  {article.id}. {article.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Articles
