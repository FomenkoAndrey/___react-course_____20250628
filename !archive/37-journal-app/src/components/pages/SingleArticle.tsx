import { useEffect, useState } from 'react'
import { ArticleInterface } from '../../types/article.interface'
import { fetchSingleArticle } from '../../utils/api'
import { Link, useParams } from 'react-router'
import { useSortField } from '../../hooks/useSortField'

const SingleArticle = () => {
  const { id: articleId } = useParams()
  const { sortQuery } = useSortField()

  // const {
  //   state: { id: articleId, sortQuery }
  // } = useLocation()
  const [article, setArticle] = useState<ArticleInterface | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  console.log('🚀 ~ SingleArticle ~ sortQuery:', sortQuery)

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const data = await fetchSingleArticle(`${articleId}`)
        setArticle(data)
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchArticleData()
  }, [articleId])

  return (
    <div>
      {isLoading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!isLoading && !error && article && (
        <div>
          <h1>{article.title}</h1>
          <hr />
          <h3>ID: {article.id}</h3>
          <h3>Slug: {article.slug}</h3>
          <p>{article.body}</p>

          <div className="link-xl">
            <Link to={`/articles${sortQuery}`}>Back to articles</Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default SingleArticle
