import { useActionState } from 'react'
import { fakeLogin } from '../utils/api'
import './LoginForm.css'

interface LoginResponse {
  username: string
  password: string
}

interface State {
  data: LoginResponse | null
  error: string | null
}

const LoginForm = () => {
  const [{ data, error }, submitAction, isPending] = useActionState<State, FormData>(login, { data: null, error: null })

  async function login(_prev: State, formData: FormData) {
    const username = formData.get('username') as string
    const password = formData.get('password') as string

    try {
      const data = await fakeLogin({ username, password })
      console.log(data)
      return { data, error: null }
    } catch (error: unknown) {
      if (error instanceof Error) {
        return { data: null, error: error.message }
      } else {
        return { data: null, error: 'An unknown error occurred' }
      }
    }
  }

  return (
    <form action={submitAction}>
      <div className="form-group">
        <input type="text" id="username" autoComplete="username" placeholder="Enter your username" name="username" />
        <label htmlFor="username">Username</label>
      </div>

      <div className="form-group">
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          name="password"
        />
        <label htmlFor="password">Password</label>
      </div>

      <button className="btn btn-primary" type="submit">
        {isPending ? 'Logging in...' : 'Submit'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && <p style={{ color: 'green' }}>{data.username} logged in</p>}
    </form>
  )
}

export default LoginForm
