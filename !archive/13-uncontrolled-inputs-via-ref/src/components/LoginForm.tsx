import { useRef } from 'react'

const LoginForm = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({
      username: usernameRef.current?.value,
      password: passwordRef.current?.value
    })
  }

  return (
    <form className="col-6 mx-auto" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          ref={usernameRef}
          type="text"
          className="form-control"
          id="username"
          placeholder="Enter your username"
          autoComplete="off"
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
          placeholder="Enter your password"
          autoComplete="off"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  )
}

export default LoginForm
