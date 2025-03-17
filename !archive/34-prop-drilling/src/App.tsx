import Level1 from './components/Level1'

const App = () => {
  const propValue = 'Привіт, це Drilling Prop!'

  return (
    <div>
      <Level1 value={propValue} />
    </div>
  )
}

export default App
