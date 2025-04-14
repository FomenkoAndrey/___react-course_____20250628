import { Link } from 'react-router'
import { useFetch } from '../hooks/useFetch'
import { PostInterface } from '../types/post.interface'

const Posts = () => {
  const {
    data: posts,
    error,
    isLoading
  } = useFetch<PostInterface>('https://jsonplaceholder.typicode.com/posts', 20)

  return (
    <div>
      <h1>Posts</h1>
      {isLoading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      <ul>
        {posts?.map((post: PostInterface) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Posts
