import { Suspense } from 'react'
import UserList from './components/UserList'
import ErrorBoundary from './components/ErrorBoundary'

const App = () => {
  return (
    <div>
      <h1>Users list</h1>
      <ErrorBoundary>
        <Suspense fallback={<p>Loading...</p>}>
          <UserList />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default App
