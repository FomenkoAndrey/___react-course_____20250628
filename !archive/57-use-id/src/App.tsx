import { FormEvent } from 'react'
import InputField from './components/InputField'

const App = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e.target)
    console.log('Form submitted with values:', {
      email: e.target.email.value,
      password: e.target.password.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputField label="Email" type="email" description="Enter your email" />
      <InputField label="Password" type="password" description="Enter your password" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default App
