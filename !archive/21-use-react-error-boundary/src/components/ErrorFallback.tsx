interface ErrorFallbackProps {
  error: Error
}

export const ErrorFallback = ({ error }: ErrorFallbackProps) => {
  return (
    <div role="alert" style={{ color: 'red', padding: '10px', border: '1px solid red', borderRadius: '5px' }}>
      <p>⚠️ Something went wrong</p>
      <pre>{error.message}</pre>
    </div>
  )
}

export default ErrorFallback
