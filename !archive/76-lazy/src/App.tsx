import { lazy, Suspense, type FC } from 'react'

const LazyComponent = lazy(() => {
  return new Promise<{ default: FC }>((resolve) => {
    setTimeout(() => {
      import('./components/Lazy').then((module) => {
        resolve({ default: module.default })
      })
    }, 2000)
  })
})

const App = () => {
  return (
    <div>
      <h1>App Component</h1>
      <Suspense fallback={<div style={{ color: 'red', fontSize: '40px' }}>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  )
}

export default App
