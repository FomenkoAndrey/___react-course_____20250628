import InputField from './components/InputField'

const App = () => {
  return (
    <form>
      <InputField
        label="Email"
        type="email"
        description="Enter your email address"
      />
      <InputField
        label="Password"
        type="password"
        description="Enter your password (at least 8 characters)"
      />
      <button type="submit" className="material-button">
        Submit
      </button>
    </form>
  )
}

export default App
