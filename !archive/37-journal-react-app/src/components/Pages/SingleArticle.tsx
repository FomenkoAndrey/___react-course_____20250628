import { useState, useEffect } from 'react'
import { getSingleArticle } from '../../utils/api'
import type { ArticleInterface } from '../../types/Article.interface'
import { Link, useParams } from 'react-router'
import { useSortField } from '../../hooks/useSortField'

const SingleArticle = () => {
  const [article, setArticle] = useState<ArticleInterface | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const { id } = useParams()
  const { sortQuery } = useSortField()

  useEffect(() => {
    ;(async () => {
      try {
        setError(null)
        const data = await getSingleArticle(`${id}`)
        setArticle(data)
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unknown error')
      } finally {
        setIsLoading(false)
      }
    })()
  }, [id])

  return (
    <div>
      {isLoading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {!isLoading && !error && article && (
        <>
          <h1>{article.title}</h1>
          <hr />
          <h3>Id: {article.id}</h3>
          <h3>Slug: {article.slug}</h3>
          <hr />
          <p>{article.body}</p>
          <div className="link-xl">
            <Link to={`/articles${sortQuery}`}>All articles</Link>
          </div>
        </>
      )}
    </div>
  )
}

export default SingleArticle
