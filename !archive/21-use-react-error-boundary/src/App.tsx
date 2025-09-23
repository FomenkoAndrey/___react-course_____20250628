import AppErrorBoundary from './components/AppErrorBoundary'
import Loading from './components/Loading'
import UsersList from './components/UsersList'
import { Suspense } from 'react'

const App = () => {
  return (
    <AppErrorBoundary>
      <Suspense fallback={<Loading />}>
        <h1>Users list</h1>
        <UsersList />
      </Suspense>
    </AppErrorBoundary>
  )
}

export default App
