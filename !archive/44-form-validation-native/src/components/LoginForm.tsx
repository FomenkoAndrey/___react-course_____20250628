import { ChangeEvent, FormEvent, useReducer, FocusEvent } from 'react'
import InputField from './InputField'

type FormState = {
  login: string
  password: string
  errors: Record<string, string>
  touched: Record<string, boolean>
}

type FormAction =
  | { type: 'SET_FIELD'; field: string; value: string }
  | { type: 'SET_TOUCHED'; field: string }
  | { type: 'VALIDATE_FIELD'; field: string }
  | { type: 'VALIDATE_ALL' }

const initialState: FormState = {
  login: '',
  password: '',
  errors: {
    login: '',
    password: ''
  },
  touched: {
    login: false,
    password: false
  }
}

const validationRules = {
  login: (value: string) => {
    if (!value.trim()) return 'Login is required'
    if (value.length < 3 || value.length > 15)
      return 'Login must be between 3 and 15 characters'
    return ''
  },
  password: (value: string) => {
    if (!value.trim()) return 'Password is required'
    if (value.length < 8 || value.length > 20)
      return 'Password must be between 8 and 20 characters'
    return ''
  }
}

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case 'SET_FIELD': {
      return {
        ...state,
        [action.field]: action.value
      }
    }
    case 'SET_TOUCHED': {
      return {
        ...state,
        touched: {
          ...state.touched,
          [action.field]: true
        }
      }
    }
    case 'VALIDATE_FIELD': {
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: validationRules[
            action.field as keyof typeof validationRules
          ](state[action.field as keyof Pick<FormState, 'login' | 'password'>])
        }
      }
    }
    case 'VALIDATE_ALL': {
      return {
        ...state,
        errors: {
          login: validationRules.login(state.login),
          password: validationRules.password(state.password)
        },
        touched: {
          login: true,
          password: true
        }
      }
    }
  }
}

const LoginForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    dispatch({ type: 'SET_FIELD', field: name, value })
    if (state.touched[name]) {
      dispatch({ type: 'VALIDATE_FIELD', field: name })
    }
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name } = e.target
    dispatch({ type: 'SET_TOUCHED', field: name })
    dispatch({ type: 'VALIDATE_FIELD', field: name })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    dispatch({ type: 'VALIDATE_ALL' })

    const hasErrors = Object.values(state.errors).some((error) => error !== '')

    if (!hasErrors) {
      console.log('Form submitted successfully', {
        login: state.login,
        password: state.password
      })
    } else {
      console.log('Form validation failed', state.errors)
    }
  }

  const isFormValid = Object.values(state.errors).every((error) => error === '')

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputField
          id="login"
          name="login"
          label="Login"
          type="text"
          value={state.login}
          error={state.errors.login}
          isTouched={state.touched.login}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your login"
        />
        <InputField
          id="password"
          name="password"
          label="Password"
          type="password"
          value={state.password}
          error={state.errors.password}
          isTouched={state.touched.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your password"
        />
        <button type="submit" disabled={!isFormValid}>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
