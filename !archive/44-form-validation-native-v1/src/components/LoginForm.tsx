import { useState, type ChangeEvent, type FormEvent } from 'react'

const LoginForm = () => {
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loginError, setLoginError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')

  const handleLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value)
    setLoginError('')
  }

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    setPasswordError('')
  }

  const validateForm = () => {
    let isValid = true

    if (login.trim() === '') {
      setLoginError('Login is required')
      isValid = false
    } else if (login.length < 3 || login.length > 15) {
      setLoginError('Login must be between 3 and 15 characters')
      isValid = false
    }

    if (password.trim() === '') {
      setPasswordError('Password is required')
      isValid = false
    } else if (password.length < 8 || password.length > 20) {
      setPasswordError('Password must be between 8 and 20 characters')
      isValid = false
    }

    return isValid
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Login:', { login, password })
    }
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
        {loginError && <div className="error">{loginError}</div>}
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
        {passwordError && <div className="error">{passwordError}</div>}
      </div>
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm
