import Level1 from './components/Level1'

const App = () => {
  const propValue = 'Привіт, це Drilling Prop!'

  return (
    <div>
      <h1>Prop Drilling Example</h1>
      <Level1 value={propValue} />
    </div>
  )
}

export default App
