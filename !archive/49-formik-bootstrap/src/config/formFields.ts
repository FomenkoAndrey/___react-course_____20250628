import type { InputFieldProps } from '../components/InputField'

type FormFieldConfig = Omit<InputFieldProps, 'disabled' | 'readonly'>

export const formFields: FormFieldConfig[] = [
  {
    name: 'username',
    type: 'text',
    placeholder: 'Enter your name',
    label: 'Name'
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Enter your password',
    label: 'Password'
  },
  {
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirm your password',
    label: 'Confirm Password'
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Enter your email',
    label: 'Email'
  }
]
