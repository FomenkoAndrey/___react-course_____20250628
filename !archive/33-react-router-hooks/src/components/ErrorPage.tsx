import { useState } from 'react'

const ErrorPage = () => {
  const [hasError, setHasError] = useState(false)

  const handleError = () => setHasError(true)

  if (hasError) {
    throw new Error('Тестова помилка з компонента ErrorPage')
  }

  return (
    <div>
      <h1>Тестування помилок</h1>
      <button onClick={handleError}>Викликати помилку</button>
    </div>
  )
}

export default ErrorPage
