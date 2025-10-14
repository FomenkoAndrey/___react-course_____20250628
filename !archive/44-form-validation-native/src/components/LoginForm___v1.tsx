import { useState, type FormEvent, type ChangeEvent } from 'react'

const LoginForm = () => {
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value)
  }

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Login:', { login, password })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="login">Login</label>
        <input
          type="text"
          id="login"
          name="login"
          value={login}
          onChange={handleLogin}
          placeholder="Enter your login"
          autoComplete="username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePassword}
          placeholder="Enter your password"
          autoComplete="current-password"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm
