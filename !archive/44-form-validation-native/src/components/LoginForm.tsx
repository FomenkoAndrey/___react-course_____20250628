import {
  type FormEvent,
  type ChangeEvent,
  type FocusEvent,
  useReducer
} from 'react'
import InputField from './InputField'
import {
  formReducer,
  initialState,
  FormActionType,
  type FormFields
} from '../utils/formReducer'

const LoginForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const fieldName = name as FormFields
    dispatch({ type: FormActionType.SET_FIELD, field: fieldName, value })
    if (state.touched[fieldName]) {
      dispatch({ type: FormActionType.VALIDATE_FIELD, field: fieldName })
    }
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name } = e.target
    const fieldName = name as FormFields
    dispatch({ type: FormActionType.SET_TOUCHED, field: fieldName })
    dispatch({ type: FormActionType.VALIDATE_FIELD, field: fieldName })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch({ type: FormActionType.VALIDATE_ALL })

    const hasErrors = Object.values(state.errors).some((error) => error !== '')

    if (hasErrors) {
      console.log('Form has errors:', state.errors)
      return
    }

    console.log('Form submitted successfully:', state)
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        id="login"
        name="login"
        label="Login"
        type="text"
        value={state.login}
        error={state.errors.login}
        isTouched={state.touched.login}
        placeholder="Enter your login"
        autoComplete="username"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <InputField
        id="password"
        name="password"
        label="Password"
        type="password"
        value={state.password}
        error={state.errors.password}
        isTouched={state.touched.password}
        placeholder="Enter your password"
        autoComplete="current-password"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm
