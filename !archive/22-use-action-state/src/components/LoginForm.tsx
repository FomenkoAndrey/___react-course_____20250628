import { useActionState } from 'react'
import './LoginForm.css'
import { fakeLogin } from '../utils/fakeLogin'

interface LoginData {
  username: string
  password: string
}

interface State {
  data: LoginData | null
  error: string | null
}

const LoginForm = () => {
  const [{ data, error }, submitAction] = useActionState<State, FormData>(
    login,
    {
      data: null,
      error: null
    }
  )

  async function login(prevState: State, formData: FormData) {
    const username = formData.get('username') as string
    const password = formData.get('password') as string

    try {
      const data = await fakeLogin({ username, password })
      console.log(data)
      return {
        data,
        error: null
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        return { ...prevState, error: error.message }
      } else {
        return { ...prevState, error: 'An unknown error occurred' }
      }
    }
  }

  return (
    <form action={submitAction}>
      <div className="form-group">
        <input
          id="username"
          type="text"
          placeholder="Username"
          autoComplete="username"
          name="username"
        />
        <label htmlFor="username">Username</label>
      </div>

      <div className="form-group">
        <input
          id="password"
          type="password"
          placeholder="Password"
          autoComplete="new-password"
          name="password"
        />
        <label htmlFor="password">Password</label>
      </div>

      <button className="btn" type="submit">
        Login
      </button>

      {data && <p style={{ color: 'green' }}>{data.username} logged in</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  )
}

export default LoginForm
