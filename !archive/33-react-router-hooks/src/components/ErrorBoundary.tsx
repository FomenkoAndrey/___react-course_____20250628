import { useRouteError } from 'react-router'

const ErrorBoundary = () => {
  const error = useRouteError()

  console.log(error)

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h1>Виникла помилка!</h1>
      <p>{(error as Error)?.message || 'Щось пішло не так'}</p>
      <p>Спробуйте перезавантажити сторінку</p>
    </div>
  )
}

export default ErrorBoundary
