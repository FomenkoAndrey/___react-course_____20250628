import { useQuery } from '@tanstack/react-query'

interface Post {
  id: number
  title: string
  body: string
}

const fetchPosts = async (): Promise<Post[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch('https://jsonplaceholder.typicode.com/posts')

  throw new Error('Test error')

  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }

  return response.json()
}

const App = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    retry: 2
  })

  if (isLoading) return <h1>Loading...</h1>
  if (isError && error instanceof Error) return <h1>{error.message}</h1>

  return (
    <div>
      <h1>Posts</h1>
      {data?.map(({ id, title, body }) => (
        <div key={id}>
          <h2>
            {id} - {title}
          </h2>
          <p>{body}</p>
        </div>
      ))}
    </div>
  )
}

export default App
