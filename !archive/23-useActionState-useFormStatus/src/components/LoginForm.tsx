import { useActionState } from 'react'
import type { StateInterface } from '../types/State.interface'
import './LoginForm.css'
import SubmitButton from './SubmitButton'
import { login } from '../utils/api'

const LoginForm = () => {
  const [{ data, error }, submitAction] = useActionState<
    StateInterface,
    FormData
  >(login, {
    data: null,
    error: null
  })

  return (
    <form action={submitAction}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          autoComplete="off"
          placeholder="Enter your username"
          name="username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          autoComplete="off"
          placeholder="Enter your password"
          name="password"
        />
      </div>
      <SubmitButton />
      {data && <p style={{ color: 'green' }}>{data.username} logged in</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  )
}

export default LoginForm
