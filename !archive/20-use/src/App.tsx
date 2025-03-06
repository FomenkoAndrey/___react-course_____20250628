import { Suspense } from 'react'
import UserList from './components/UserList'

const App = () => {
  return (
    <div>
      <h1>Users list</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <UserList />
      </Suspense>
    </div>
  )
}

export default App
