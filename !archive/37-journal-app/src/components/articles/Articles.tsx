import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import type { ArticleInterface } from '../../types/article.interface'
import { fetchArticles } from '../../api'
import { useSortField } from '../../hooks/useSortField'
import { generateSortTitle } from '../../utils/generateSortTitle'
import { isValidSortKey } from '../../utils/isValidSortKey'
import SortBlock from './SortBlock'

const Articles = () => {
  const [articles, setArticles] = useState<ArticleInterface[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { sortKey, sortQuery } = useSortField()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchDataAndHandleLoading = async () => {
      try {
        setIsLoading(true)
        const data = isValidSortKey(sortKey)
          ? await fetchArticles(sortKey)
          : await fetchArticles(null)
        setArticles(data)
        setError(null)
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDataAndHandleLoading()
  }, [sortKey])

  useEffect(() => {
    if (!isValidSortKey(sortKey)) {
      navigate('.')
    }
  }, [sortKey, navigate])

  return (
    <div>
      <SortBlock />
      <h1>Articles{generateSortTitle(sortQuery, sortKey)}</h1>
      <div>
        {isLoading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}
        {!isLoading &&
          !error &&
          articles.map(({ id, title, slug }) => (
            <h2 key={id}>
              <Link to={`/articles/${slug}/${id}`} state={{ id, sortQuery }}>
                {title} ({id})
              </Link>
            </h2>
          ))}
      </div>
    </div>
  )
}

export default Articles
