import { FormEvent, useRef } from 'react'

const LoginForm = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Username:', usernameRef.current?.value)
    console.log('Password:', passwordRef.current?.value)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          ref={usernameRef}
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
          ref={passwordRef}
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
