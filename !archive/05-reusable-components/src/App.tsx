import Button from './components/Button.tsx'

const App = () => {
  return (
    <div>
      <h1>Reusable Button</h1>
      <Button text="Click me" />
      <Button type="submit" disabled={true} text="Submit" />
      <Button type="reset" disabled={false} text="Reset" />
    </div>
  )
}

export default App
