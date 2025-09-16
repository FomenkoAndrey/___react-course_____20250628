import { type FormEvent, type ChangeEvent, useState } from 'react'

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
    console.log({ username: username.value, password: password.value })
  }

  return (
    <form className="col-6 mx-auto" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="username">
          Username
        </label>
        <input
          {...username}
          className="form-control"
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          autoComplete="off"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          {...password}
          className="form-control"
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          autoComplete="off"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Login
      </button>
    </form>
  )
}

export default LoginForm
