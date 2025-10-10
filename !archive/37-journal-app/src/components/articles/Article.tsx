import { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router'
import type { ArticleInterface } from '../../types/article.interface'
import { fetchArticle } from '../../api'

const Article = () => {
  const [article, setArticle] = useState<ArticleInterface>()
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { id } = useParams()
  const { sortQuery } = useLocation().state

  useEffect(() => {
    const fetchDataAndHandleLoading = async () => {
      try {
        setIsLoading(true)
        const article = await fetchArticle(`${id}`)
        setArticle(article)
        setError(null)
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchDataAndHandleLoading()
  }, [id])

  return (
    <div>
      {isLoading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!isLoading && !error && article && (
        <>
          <h1>{article.title}</h1>
          <hr />
          <h3>{article.id}</h3>
          <h3>{article.slug}</h3>
          <hr />
          <p>{article.body}</p>
          <div className="link-xl">
            <Link to={`../..${sortQuery}`} relative="path">
              All articles
            </Link>
          </div>
        </>
      )}
      <h1>Article</h1>
    </div>
  )
}

export default Article
