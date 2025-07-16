import type { ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './ErrorFallback'

interface AppErrorBoundaryProps {
  children: ReactNode
}

const AppErrorBoundary = ({ children }: AppErrorBoundaryProps) => {
  return <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
}

export default AppErrorBoundary
