import { useActionState } from 'react'
import { fakeLogin } from '../utils/spi'
import './LoginForm.css'

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
      <button className="btn" type="submit">
        {'Submit'}
      </button>
      {data && <p style={{ color: 'green' }}>{data.username} logged in</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  )
}

export default LoginForm
