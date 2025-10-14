import { useForm } from 'react-hook-form'

type FormData = {
  login: string
  password: string
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    mode: 'onChange'
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="login">Login</label>
        <input
          id="login"
          type="text"
          placeholder="Enter your login"
          autoComplete="username"
          {...register('login', {
            required: 'Login is required',
            minLength: {
              value: 3,
              message: 'Login must be at least 3 characters'
            },
            maxLength: {
              value: 30,
              message: 'Login must be at most 30 characters'
            }
          })}
        />
        {errors.login && <div className="error">{errors.login.message}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 5,
              message: 'Password must be at least 5 characters'
            },
            maxLength: {
              value: 25,
              message: 'Password must be at most 25 characters'
            }
          })}
        />
        {errors.password && (
          <div className="error">{errors.password.message}</div>
        )}
      </div>
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm
