import { object, string, ref } from 'yup'

export const validationSchema = object().shape({
  username: string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters long')
    .max(35, 'Username must be less than 35 characters long'),
  password: string()
    .required('Password is required')
    .min(3, 'Password must be at least 3 characters long')
    .max(15, 'Password must be less than 15 characters long'),
  confirmPassword: string()
    .oneOf([ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
  email: string().email('Invalid email').required('Email is required')
})
