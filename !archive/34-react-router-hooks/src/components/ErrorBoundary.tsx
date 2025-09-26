import { useRouteError } from 'react-router'

const ErrorBoundary = () => {
  const error = useRouteError()

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <h1>Виникла помилка</h1>
      <p>{(error as Error)?.message || 'Непередбачувана помилка'}</p>
      <p>Щоб повернутися на головну сторінку, натисніть на кнопку нижче</p>
    </div>
  )
}

export default ErrorBoundary
