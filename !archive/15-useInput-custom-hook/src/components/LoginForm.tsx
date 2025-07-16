import { type ChangeEvent, type FormEvent, useState } from 'react'

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)
  return {
    value,
    onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
  }
}

const LoginForm = () => {
  const username = useInput('')
  const password = useInput('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({
      username: username.value,
      password: password.value
    })
  }

  return (
    <form className="col-6 mx-auto" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          name="username"
          id="username"
          placeholder="Enter your username"
          autoComplete="off"
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
          name="password"
          id="password"
          placeholder="Enter your password"
          autoComplete="off"
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
