import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './ErrorFallback'
import type { ReactNode } from 'react'

interface AppErrorBoundaryProps {
  children: ReactNode
}

const AppErrorBoundary = ({ children }: AppErrorBoundaryProps) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  )
}

export default AppErrorBoundary
