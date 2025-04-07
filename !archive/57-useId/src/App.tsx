import InputField from './components/InputField'

const App = () => {
  return (
    <form>
      <InputField
        label="Email"
        type="email"
        description="Email must be a valid email address"
      />
      <InputField
        label="Password"
        type="password"
        description="Password must be at least 8 characters long"
      />
      <button type="submit" className="material-button">
        Submit
      </button>
    </form>
  )
}

export default App
