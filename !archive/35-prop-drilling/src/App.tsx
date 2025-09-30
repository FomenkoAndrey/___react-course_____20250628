import Level1 from './components/Level1'

const App = () => {
  const propValue = 'Привіт, це Drilling prop demo'
  return (
    <div>
      <h1>App Component: Prop drilling</h1>
      <Level1 propValue={propValue} />
    </div>
  )
}

export default App
