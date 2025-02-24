import { PostInterface } from '../types/Post.interface'
import Loading from '../Loading'
import { useFetch } from '../hooks/useFetch'

const Posts = () => {
  const { data: posts, error, isLoading } = useFetch<PostInterface>('https://jsonplaceholder.typicode.com/posts', 10)

  return (
    <div>
      <h1>Posts Page</h1>
      {isLoading && <Loading />}
      {error && <h2 className="error">{error}</h2>}
      <ul>
        {!!posts.length && posts.map(post => (
          <li key={post.id}>
            <h3>{post.id}. {post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Posts
