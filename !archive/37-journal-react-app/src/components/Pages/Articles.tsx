import { useEffect, useState } from 'react'
import { getArticles } from '../../utils/api'
import { type ArticleInterface } from '../../types/Article.interface'
import { Link, useNavigate } from 'react-router'
import { useSortField } from '../../hooks/useSortField'
import { generateTitle } from '../../utils/generateTitle'
import { isValidSortKey } from '../../utils/isValidSortKey'

const Articles = () => {
  const [articles, setArticles] = useState<ArticleInterface[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const { sortKey, sortQuery } = useSortField()

  const navigate = useNavigate()

  useEffect(() => {
    ;(async () => {
      try {
        setError(null)
        const data = await getArticles(isValidSortKey(sortKey) ? sortKey : null)
        setArticles(data)
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unknown error')
      } finally {
        setIsLoading(false)
      }
    })()
  }, [sortKey])

  useEffect(() => {
    if (!isValidSortKey(sortKey)) {
      navigate(`/articles`)
    }
  }, [sortKey, navigate])

  const setSortKeyHandler = (key?: string) => {
    navigate(`/articles${key ? `?sort=${key}` : ''}`)
  }

  return (
    <div>
      <div className="sort-block">
        <h2>Sort articles by:</h2>
        <button onClick={() => setSortKeyHandler('title')}>title, asc</button>
        <button onClick={() => setSortKeyHandler('-title')}>title, desc</button>
        <button onClick={() => setSortKeyHandler('id')}>id, asc</button>
        <button onClick={() => setSortKeyHandler('-id')}>id, desc</button>
        <button onClick={() => setSortKeyHandler()}>reset sorting</button>
      </div>

      <h1>Articles{generateTitle(sortKey)}</h1>
      <div>
        {isLoading && <div className="loading">Loading...</div>}
        {error && <div className="error">Error: {error}</div>}
        {!isLoading &&
          !error &&
          articles.length > 0 &&
          articles.map(({ id, title, slug }) => (
            <h2 key={id}>
              <Link to={`${slug}/${id}${sortQuery}`} state={{ id }}>
                {title} ({id})
              </Link>
            </h2>
          ))}
      </div>
    </div>
  )
}

export default Articles
