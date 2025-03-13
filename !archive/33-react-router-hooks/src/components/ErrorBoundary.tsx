import { useRouteError } from 'react-router'

const ErrorBoundary = () => {
  const error = useRouteError()

  return (
    <div>
      <h1>Error occurred</h1>
      <p>{(error as Error).message || 'Unknown error'}</p>
      <p>Try to reload the page</p>
    </div>
  )
}

export default ErrorBoundary
