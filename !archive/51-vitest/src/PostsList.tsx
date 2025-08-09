import { useEffect, useState } from 'react'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!response.ok) {
          setError('Failed to fetch posts')
          return
        }
        const data: Post[] = await response.json()
        setPosts(data)
        setError(null)
      } catch {
        setError('Failed to fetch posts')
      } finally {
        setLoading(false)
      }
    }

    void fetchData()
  }, [])

  return (
    <div>
      {error && <div>{error}</div>}
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <div>
          <h2>Posts:</h2>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default PostsList
