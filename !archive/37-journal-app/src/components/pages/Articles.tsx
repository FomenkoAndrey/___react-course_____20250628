import { useEffect, useState } from 'react'
import { ArticleInterface } from '../../types/article.interface'
import { fetchArticles } from '../../utils/api'
import { Link, useNavigate } from 'react-router'
import { useSortField } from '../../hooks/useSortField'
import { isValidSortKey } from '../../utils/isValidSortKey'
import { generateSortTitle } from '../../utils/generateSortTitle'

const Articles = () => {
  const [articles, setArticles] = useState<ArticleInterface[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const navigate = useNavigate()

  const { sortKey, sortQuery } = useSortField()

  useEffect(() => {
    const fetchArticlesData = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const data = await fetchArticles(
          isValidSortKey(sortKey) ? sortKey : null
        )
        setArticles(data)
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchArticlesData()
  }, [sortKey])

  useEffect(() => {
    if (!isValidSortKey(sortKey)) {
      navigate(`/articles`)
    }
  }, [sortKey, navigate])

  return (
    <div>
      <h1>
        Articles
        {generateSortTitle(sortQuery, sortKey)}
      </h1>
      <div>
        {isLoading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}
        {!isLoading &&
          !error &&
          articles.map(({ id, title, slug }) => (
            <h2 key={id}>
              <Link
                to={`/articles/${slug}/${id}${sortQuery}`}
                state={{ id, sortQuery }}
              >
                {title} ({id})
              </Link>
            </h2>
          ))}
      </div>
    </div>
  )
}

export default Articles
