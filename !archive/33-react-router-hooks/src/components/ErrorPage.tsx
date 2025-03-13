import { useState } from 'react'

const ErrorPage = () => {
  const [hasError, setHasError] = useState(false)

  const handleError = () => setHasError(true)

  if (hasError) {
    throw new Error('Error')
  }

  return (
    <div>
      <h1>Error tests</h1>
      <button onClick={handleError}>Throw error</button>
    </div>
  )
}

export default ErrorPage
