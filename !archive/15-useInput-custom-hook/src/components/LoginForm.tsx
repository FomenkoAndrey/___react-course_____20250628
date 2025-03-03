import { ChangeEvent, FormEvent, useState } from 'react'

function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
  }
}

const LoginForm = () => {
  const username = useInput('')
  const password = useInput('')

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({
      username: username.value,
      password: password.value
    })
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
          {...username}
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
          {...password}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  )
}

export default LoginForm
