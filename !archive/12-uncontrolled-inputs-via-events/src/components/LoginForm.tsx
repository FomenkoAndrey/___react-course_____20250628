import { FormEvent } from 'react'

interface FormElements extends HTMLFormControlsCollection {
  username: HTMLInputElement
  password: HTMLInputElement
}

interface LoginFormElements extends HTMLFormElement {
  elements: FormElements
}

const LoginForm = () => {
  const handleFormSubmit = (e: FormEvent<LoginFormElements>) => {
    e.preventDefault()
    const form = e.currentTarget.elements
    console.log('Username:', form.username.value)
    console.log('Password:', form.password.value)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          placeholder="Enter your username"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Enter your password"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  )
}

export default LoginForm
