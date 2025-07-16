import { Suspense } from 'react'
import UsersList from './components/UsersList'
import Loading from './components/Loading'
import AppErrorBoundary from './components/ErrorBoundary'

const App = () => {
  return (
    <div>
      <h1>Users list</h1>
      <AppErrorBoundary>
        <Suspense fallback={<Loading />}>
          <UsersList />
        </Suspense>
      </AppErrorBoundary>
    </div>
  )
}

export default App
