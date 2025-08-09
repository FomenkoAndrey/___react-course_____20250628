export const FormActionType = {
  SET_FIELD: 'SET_FIELD',
  SET_TOUCHED: 'SET_TOUCHED',
  VALIDATE_FIELD: 'VALIDATE_FIELD',
  VALIDATE_ALL: 'VALIDATE_ALL'
} as const

export type FormState = {
  login: string
  password: string
  errors: Record<string, string>
  touched: Record<string, boolean>
}

export type FormAction =
  | { type: typeof FormActionType.SET_FIELD; field: string; value: string }
  | { type: typeof FormActionType.SET_TOUCHED; field: string }
  | { type: typeof FormActionType.VALIDATE_FIELD; field: string }
  | { type: typeof FormActionType.VALIDATE_ALL }

export const initialState: FormState = {
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

export const validationRules = {
  login: (value: string) => {
    if (!value.trim()) return 'Login is required'
    if (value.length < 3 || value.length > 15) return 'Login must be between 3 and 15 characters'
    return ''
  },
  password: (value: string) => {
    if (!value.trim()) return 'Password is required'
    if (value.length < 8 || value.length > 20) return 'Password must be between 8 and 20 characters'
    return ''
  }
}

export const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case FormActionType.SET_FIELD:
      return {
        ...state,
        [action.field]: action.value
      }
    case FormActionType.SET_TOUCHED:
      return {
        ...state,
        touched: {
          ...state.touched,
          [action.field]: true
        }
      }
    case FormActionType.VALIDATE_FIELD:
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: validationRules[action.field as keyof typeof validationRules](
            state[action.field as keyof Pick<FormState, 'login' | 'password'>]
          )
        }
      }
    case FormActionType.VALIDATE_ALL:
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
    default:
      return { ...state }
  }
}
