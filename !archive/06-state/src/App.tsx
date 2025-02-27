import Random from './components/Random.tsx'

const App = () => {
  console.log('App')
  return (
      <div>
        <Random min={40} max={90}/>
      </div>
  )
}

export default App
