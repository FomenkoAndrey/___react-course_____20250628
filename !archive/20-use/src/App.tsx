import { Suspense } from 'react'
import UsersLists from './components/UsersLists'
import Loading from './components/Loading'

const App = () => {
  return (
    <div>
      <h1>Users list</h1>
      <Suspense fallback={<Loading />}>
        <UsersLists />
      </Suspense>
    </div>
  )
}

export default App
