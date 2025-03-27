import { useForm, useWatch } from 'react-hook-form'

type FormData = {
  login: string
  password: string
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm<FormData>({
    mode: 'onChange'
  })

  const loginValue = useWatch({ control, name: 'login' })
  const passwordValue = useWatch({ control, name: 'password' })

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
          autoComplete="off"
          placeholder="Login"
          {...register('login', {
            required: 'Login is required',
            minLength: {
              value: 3,
              message: 'Login must be at least 3 characters'
            },
            maxLength: {
              value: 15,
              message: 'Login must not be longer than 15 characters'
            }
          })}
        />
        {errors.login && <div className="error">{errors.login.message}</div>}
        {!errors.login && loginValue && (
          <div className="success">Login is valid</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="text"
          autoComplete="off"
          placeholder="Password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password must be at least 3 characters'
            },
            maxLength: {
              value: 15,
              message: 'Password must not be longer than 15 characters'
            }
          })}
        />
        {errors.password && (
          <div className="error">{errors.password.message}</div>
        )}
        {!errors.password && passwordValue && (
          <div className="success">Password is valid</div>
        )}
      </div>

      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm
